require('dotenv').config()
const app = require('./src/app')
const port = process.env.PORT || 5000
const connectDB = require('./src/db/connectDB')

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

main()