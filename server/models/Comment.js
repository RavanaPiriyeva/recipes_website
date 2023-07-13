const { default: mongoose } = require("mongoose");

const CommentSchema = mongoose.Schema({
    description: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    
})

const Comment = mongoose.model('Category', CommentSchema)

module.exports = {
    Comment
}