const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    name: String,
    email: String,
    photo: String,
    roll: String
})

const PostOpr = model('PostOpr', PostSchema);

console.log(PostOpr);

module.exports = PostOpr