const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,

    },
    username : {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        default: "agent",
    },
    rank: {
        type: Number,
        default: 0,
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);