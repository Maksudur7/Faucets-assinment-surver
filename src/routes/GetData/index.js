var express = require('express')
const GetOpr = require('../../models/GetOpration')

var router = express.Router()

router.get('/getoprs', async(req, res) =>{
    const cursor = await GetOpr.find()
    res.send(cursor)
})


module.exports = router