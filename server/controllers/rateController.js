const { Rate } = require("../models/Rate");

const RateController = {
  getAll: (req, res) => {
    Rate.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

   add: (req, res) => {
    let rate = new Rate({
      rate: req.body.rate,
    });

    rate.save();

    res.json(rate);
  },
};

module.exports = {
  RateController,
};
