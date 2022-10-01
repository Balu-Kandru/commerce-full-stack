const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        unique:true
    }
});
const signupModal = mongoose.model("usersignup", signupSchema);
module.exports = signupModal;