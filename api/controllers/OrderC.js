const Order = require('../models/Order');
const User = require('../models/User');

exports.listProducts = function(req, res, next) {
  Order.find({}, (err, docs) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(docs)
    }
  }).populate("user")
}

exports.create = function(req, res) {
  const { products, userId } = req.body;

  if(!userId || !products) {
    res.status(406).json({
      "error": "Invalid Params!"
    });
  } else {
    User.findById(userId, function(err, user){
      if (err ){
        res.status(500).json({
          "error": err
        })
      } else {
        if(!user) {
          res.status(404).json({
            "error": "User not found"
          })
        } else {
          const newOrder = new Order({products, user})
  
          newOrder.save(function(err, order) {
            if(err) {
              res.status(500).json({
                "error": err
              })
            } else {
              res.status(201).json({
                "response": {
                  "message": "Created!",
                  "data": order
                }
              })
            }
          })
        }
      }
    })
  }
}