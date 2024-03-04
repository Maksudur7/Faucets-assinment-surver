const { Schema, model } = require('mongoose');

const GetSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        type: String
    }
})

const GetOpr = model('GetOpr', GetSchema);

console.log(GetOpr);

module.exports = GetOpr