const mongoose = require("mongoose");

const userinfoSchema = new mongoose.Schema({
    age: Number,
    experience: String,
    profession: String,
    skill: String,
    bio: String
});

module.exports = mongoose.model("userinfo", userinfoSchema);