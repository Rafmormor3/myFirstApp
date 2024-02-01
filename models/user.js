const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true
    },
    login : {
        type : String,
        required : [true, "Login is required"],
        unique : true
    },
    name : String,
    rol : String,
    password: String,
    active:Boolean
});

module.exports = mongoose.model("User", UserSchema);