const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, min: 3, max: 20, unique: true
    },
    email: {
        type: String,
        required: true, min: 8, max: 50, unique: true,
    },
    password: {
        type: String,
        required: true, min: 8, max: 50, unique: true
    },
    bio: {
        type: String,
        required: true, max: 5000
    },
    avatarImage: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png'
    },
    followers: {
        type: [String],
        default: []
    },
    following: {
        type: [String],
        default: []
    },
    accessToken: {
        type: String,
        default: ''
    },
    refreshToken: {
        type: String,
        default: ''
    }
})
module.exports = mongoose.model("User", userSchema);