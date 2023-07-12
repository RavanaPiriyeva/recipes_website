const { default: mongoose } = require("mongoose");
const { IngredientSchema } = require("./Ingredient");


const RecipeSchema = mongoose.Schema({
    ingredient:[IngredientSchema],
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
    
})

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = {
    Recipe
}