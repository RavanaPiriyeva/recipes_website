const { default: mongoose } = require("mongoose");


const CategorySchema = mongoose.Schema({
    name: String,
    image: String
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = {
    Category
}