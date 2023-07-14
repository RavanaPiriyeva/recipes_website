const { default: mongoose } = require("mongoose");


const IngredientSchema = mongoose.Schema({
    description: String,
})

const Ingredient = mongoose.model('Ingredient', IngredientSchema)

module.exports = {
    IngredientSchema,
    Ingredient
}