const express = require('express');
const { RateController } = require('../controllers/RateController');

const rateRoutes = express.Router();



rateRoutes.get('/', RateController.getAll)
rateRoutes.post('/',  RateController.add)



module.exports = {
    rateRoutes
}