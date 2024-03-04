require('./db/connectDB')
const express = require('express')
const applyMiddleware = require('./middlewares/applyMiddleware')
const connectDB = require('./db/connectDB')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000


const GetRoutes = require("./routes/GetData/index")
const PostRoutes = require("./routes/PostData/index")
applyMiddleware(app)
app.use(GetRoutes)
app.use(PostRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all("*", (req, res, next) => {
  const error = new Error(`the requested url is invalid : [${req.url}]`)
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    massage: err.massage
  })
})

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

main()