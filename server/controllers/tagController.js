const { Tag } = require("../models/Tag");

const tagController = {
    getAll: (req, res) => {
        Tag.find()
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.status(500).json(err);
        });
    },    

    add: (req, res) => {
    let tag = new Tag({
        name: req.body.name,
    })

    tag.save();

    res.json(tag);
},
};

module.exports = {
    tagController
};
