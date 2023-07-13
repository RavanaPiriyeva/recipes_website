const { default: mongoose } = require("mongoose");
const User = require('./User');
const Recipe = require('./Recipe');


const RateSchema = mongoose.Schema({
    count:Number,
    recipeId:{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const Rate = mongoose.model('Rate', RateSchema)

module.exports = {
    Rate
}