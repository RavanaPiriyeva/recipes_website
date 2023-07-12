const { Recipe } = require("../models/Recipe");

const recipeController = {
  getAll: (req, res) => {
    Recipe.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  add: (req, res) => {
    let recipe = new Recipe({
      ingredient: req.body.ingredient,
    });

    recipe.save();

    res.json(recipe);
  },
};

module.exports = {
  recipeController,
};
