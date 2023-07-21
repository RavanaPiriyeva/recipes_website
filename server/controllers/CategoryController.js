const { Category } = require("../models/Category");
const { v4: uuidv4 } = require("uuid");
const path = require('path');


const categoryController = {
  getAll: (req, res) => {
    Category.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;

    Category.findById(id)
      .then((data) => {
        if (data) res.json(data);
        else res.status(404).json({ msg: "Not found!" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  add: (req, res) => {
    let file = req.files.image;
    console.log("hhhhhh", file.name);

    //file daki uzantıyı (.jpeg, .png)
    let ext = file.name.substring(file.name.lastIndexOf("."));
    console.log("bir", ext);

    //dışarıdan gelen file SAVE edeceğim. Save path ayarlıyorum
    // let path = __dirname + ".." + '/images/' + uuidv4() + ext;

    // Bir önceki klasöre geçin
    let previousFolder = path.join(__dirname, "..");

    // Örnek kullanım:
    const imgName =  uuidv4() + ext
    let pathToPreviousFolder = path.join(
      previousFolder,
      "images",
      imgName
    );
    console.log(pathToPreviousFolder);

    file.mv(pathToPreviousFolder, function (err) {
      if (!err) res.send("UPLOADED!");
      else res.status(500).json("sad");
    });
    let url = "http://localhost:3000/img/" + imgName;
    let category = new Category({
      name: req.body.name,
      image: url,
    });

    category.save();

    res.json(category);
  },
  deleteById: (req, res) => {
    let id = req.params.id;

    Category.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });

    //eğer category silindiğinde ona bağlı tüm ürünleri silmek istersen (tavsiye edilmez!! DOĞRU DEĞİL!!)
    // Product.deleteMany({ category: id })
  },
  update: (req, res) => {
    let id = req.params.id;

    Category.findById(id)
      .then((data) => {
        data.name = req.body.name;
        data.save();

        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = {
  categoryController,
};
