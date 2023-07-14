const { default: mongoose } = require("mongoose");
const { IngredientSchema } = require("./Ingredient");


const RecipeSchema = mongoose.Schema({
    name:String,
    ingredient:[IngredientSchema],
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    description:String,
    
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = {
    Recipe
}