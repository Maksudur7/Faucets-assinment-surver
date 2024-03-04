const { Schema, model } = require('mongoose');

const GetSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    }
})

const GetOpr = model('GetOpr', GetSchema);

console.log(GetOpr);

module.exports = GetOpr