const cors = require('cors')
const express = require('express')
const { LOCAL_cLIENT } = require('../api/config/default')
const applyMiddleware = (app) => {

    app.use(cors({
        origin: [
            LOCAL_cLIENT
        ],
        credentials: true
    }))
    app.use(express.json())
}

module.exports = applyMiddleware;