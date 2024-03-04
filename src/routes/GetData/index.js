var express = require('express')
const PostOpr = require('../../models/PostOpration/PostOpration')

var router = express.Router()

router.get('/postoprs', async(req, res) =>{
    const cursor = await PostOpr.find()
    res.send(cursor)
})


module.exports = router