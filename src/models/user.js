const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: false

    },
    surname: {
        type: String,
        require: true,
        unique: false

    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('user', UserSchema)