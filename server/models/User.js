const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    username:String,
    code:String,
    codeExpire: Date,
    isActive: {
        type:Boolean,
        default: false
    },
    codeCounter: {
        type:Number,
        default: 3
    },
    forgetToken:String
})

const User = new mongoose.model('User', UserSchema);

module.exports = {
    User
}