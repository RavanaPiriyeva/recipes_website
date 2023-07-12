const express = require('express');
const { recipeController } = require('../controllers/recipeController');

const recipeRoutes = express.Router();



recipeRoutes.get('/', recipeController.getAll)
recipeRoutes.post('/',  recipeController.add)


module.exports = {
    recipeRoutes
}