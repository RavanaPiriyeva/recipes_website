const { default: mongoose } = require("mongoose");


const TagSchema = mongoose.Schema({
    name: String,
    recipe: [{ type: mongoose.Schema.Types.ObjectId, ref:"Tag" }]
})

const Tag = mongoose.model('Tag', TagSchema)

module.exports = {
    Tag
}