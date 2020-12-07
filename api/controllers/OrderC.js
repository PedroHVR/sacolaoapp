const Order = require('../models/Order');
const User = require('../models/User');

exports.listProducts = function(req, res, next) {
  const { userId } = req.params;
  const params = userId ? {user: userId} : {status: 1}

  Order.find(params, (err, docs) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(docs)
    }
  }).populate("user").populate("helper").sort({status: 1})
}

exports.updateStatus = function(req, res, next) {
  const { orderId, status, helper } = req.params;
  const toUpdate = {status: status}

  if(helper !== 'undefined') {
    toUpdate['helper'] = helper
  }

  if(!orderId || !status) {
    res.status(406).json({
      "error": "Invalid Params!"
    })
  } else {
    Order.findById(orderId, (err, order) => {
      if (err) {
        res.status(500).json(err)
      } else {
        if(!order){
          res.status(404).json({
            "error": "Order not found"
          })
        } else {
          order.updateOne(toUpdate, function(err, order){
            if (err) {
              res.status(500).json(err)
            } else {
               res.status(200).json({
                 "message": "Updated"
               })
             }
          })
        }
      }
    })
  }
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

exports.myHelpingOrders = function(req, res) {
  const { userId } = req.params;
  
  if(!userId) {
    res.status(406).json({
      "error": "Invalid Params!"
    });
  } else {
    Order.find({helper: userId}, function(err, docs){
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(docs)
      }
    }).populate("user").populate("helper")
  }
}