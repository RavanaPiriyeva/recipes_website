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
      name:req.body.name,
      ingredient: req.body.ingredient,
      categoryId: req.body.categoryId,
      userId: req.body.userId,
      tag: req.body.tag,
      description:req.body.description
    });

    recipe.save();
    res.json(recipe);
  },
};

module.exports = {
  recipeController,
};
