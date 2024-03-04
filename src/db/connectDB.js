const mongoose = require("mongoose")
require('dotenv').config()

const getConnectionString = () => {
    let connectionURI;

    if (process.env.MONGODB_URL) {
        connectionURI = process.env.MONGODB_URL
        connectionURI = connectionURI.replace('<username>', process.env.DATABASE_USERNAME)
        connectionURI = connectionURI.replace('<password>', process.env.DATABASE_PASSWORD)
    }

    return connectionURI
}

const connectDB = async () => {
    console.log('Connecting to database ...')
    const uri = getConnectionString()
    await mongoose.connect(uri, { dbName: process.env.DATABASE_NAME })
    console.log('Connection to database');
}

module.exports = connectDB