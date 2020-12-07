const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../helpers/config');

exports.createUser = function(req, res, next) {

  let data = {
    name: null,
    phone: null,
    email: null,
    password: null,
    address: null,
    profile: null,
  };
  
  for (let key in req.body) {
    if (data.hasOwnProperty(key)) {
      data[key] = req.body[key];
    }
  }

  let condition = data.name == null || data.email == null || 
                  data.password == null || data.address === null ||
                  data.profile == null

  if (condition) {
    return res.status(406).json({
      'response': null,
      'error' : 'Invalid params!'
    });
  } else {

    for (let key in data) {
      if (data[key] == null) {
        delete data[key];
      }
    }

    bcrypt.hash(data.password, 10, function(err, hash) {
      if (err) {
        return res.status(500).json({
          'response' : null,
          'error' : err
        });
      } else {
        data.password = hash;
        let newUser = new User(data);

        newUser.save(function(err, user) {
          if (err) {
            return res.status(500).json({
              'response': null,
              'error' : err
            });
          } else {

            let infoToken = {
              email: user.email,
              idUser: user._id,
              name: user.name,
              role: user.profile
            }

            let token = jwt.sign(
              infoToken,
              secret.secret,
              { expiresIn: "365d" }
            );

            return res.status(201).json({
              'error': null,
              'response' : {
                'message': 'Created!',
                'data': user,
                'token': token
              }
            });
          }
        });
      }
    });
  }
};

exports.login = function(req, res, next) {

  let email = req.body.email;
  let password = req.body.password;

  if (email == undefined || password == undefined) {
    return res.status(406).json({
      'response' : null,
      'error' : 'Invalid params!'
    });
  } else {
    User.findOne({ $or: [ { email: email } ] }, function(err, user) {
      if (err) {
        return res.status(406).json({
          'response': null,
          'error': err
        });
      } else {
        if (!user) {
          return res.status(406).json({
            'response': null,
            'error': 'User not found' 
          });
        } else {
          bcrypt.compare(password, user.password, function(err, autenticado) {
            if (err) {
              return res.status(406).json({
                'response': null,
                'error': err
              });
            } else {
              if (!autenticado) {
                return res.status(401).json({
                  'error': null,
                  'response': {
                    'auth': false,
                    'message': 'Not authenticated!'
                  }
                });
              } else {
                let infoToken = {
                  'email': user.email,
                  'idUser': user._id,
                  'name': user.name,
                  'role': user.profile
                };

                let infoUser = {
                  'idUser': user._id,
                  'name': user.name,
                  'email': user.email,
                  'phone': user.phone
                };

                let token = jwt.sign(
                                      infoToken,
                                      secret.secret,
                                      { expiresIn: "365d" }
                                    );

                return res.status(201).json({
                  'error' : null,
                  'response' : {
                    'auth': true,
                    'message': 'Authenticated!',
                    'token': token,
                    'data': infoUser
                  }
                });
              }
            }
          });
        }
      }
    });
  }
};
