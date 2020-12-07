const Product = require('../models/Product');
const Category = require('../models/Category');

exports.listProducts = function(req, res, next) {
  Category.find({}, (err, docs) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(docs)
    }
  }).populate("products")
}

exports.createProduct = function(req, res) {
  const { name, categoryId } = req.body

  if ( !name || !categoryId ) {
    res.status(406).json({
      "error": "Invalid params!"
    })
  } else {
    let newProduct = new Product({name});
    newProduct.save((err, product) => {
      if (err) {
        return res.status(500).json({
          'response': null,
          'error' : err
        });
      } else {
        Category.findOne({_id: categoryId}, (err, category) => {
          if(!category) {
            res.status(404).json({
              'error': 'Category not found'
            })
          } else {
            category.products.push(product)
            category.save((err, _) => {
              if(err) {
                product.remove()
                res.status(500).json({
                  'response': null,
                  'error' : err
                })
              } else {
                res.status(201).json({
                  "response": {
                    "message": "Created",
                    "data": product
                  }
                })
              }
            })
          }
        })
      }
    })
  }
}


exports.createCategory = function(req, res) {
  const { name } = req.body

  if ( !name ) {
    res.status(406).json({
      "error": "Invalid params!"
    })
  } else {
    let newCategory = new Category({name});

    newCategory.save((err, product) => {
      if (err) {
        return res.status(500).json({
          'response': null,
          'error' : err
        });
      } else {
        res.status(201).json({
          "response": {
            "message": "Created",
            "data": product
          }
        })
      }
    })
  }
}