const express = require('express');
const { tagController } = require('../controllers/tagController');

const tagRoute = express.Router();


tagRoute.get('/', tagController.getAll)
tagRoute.post('/', tagController.add)


module.exports = {
    tagRoute
}