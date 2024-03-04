var express = require('express');
const PostOpr = require('../../models/PostOpration/PostOpration');

var router = express.Router()

router.post('/getoprs', async (req, res) => {
    let data = new PostOpr(req.body)
    const result = await data.save()
    console.log(result);
    res.send(result)
})

module.exports = router;
