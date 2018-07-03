const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CommentSchema = new mongoose.Schema({
    email: {
        type: String
    },
    text: {
        type: String,
        default: ""

    },
    date: {
        type: String,
        default: JSON.stringify(Date.now())
    }
})

module.exports = mongoose.model('comment', CommentSchema)