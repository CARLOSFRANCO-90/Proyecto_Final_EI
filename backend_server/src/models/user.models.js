const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true,
        },
        lastname:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            unique: true,
        },
        password: {
            type: String,
            unique: true,
        },
        role: {
            type: String,
            require: true,
        },
        active: {
            type: Boolean,
            require: true,
        },
        avatar: {
            type: String,
            require: false,
        },
    });
module.exports = mongoose.model("User", userSchema);