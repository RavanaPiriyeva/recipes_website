const { default: mongoose } = require("mongoose");
const { IngredientSchema } = require("./Ingredient");


const RecipeSchema = mongoose.Schema({
    ingredient:[IngredientSchema],
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }]
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = {
    Recipe
}