'use strict';
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    username: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Username column cannot be empty'
            },
            uniqueUsername: function(username, callback) {
                const Op = sequelize.Op;
                Customer.findAll({where: {id: {[Op.ne]: this.id}}})
                    .then(function(customers) {
                        for (let i = 0; i < customers.length; i++) {
                            if (username === customers[i].username) {
                                callback('Username is already exists');
                            }
                        }

                        callback();
                    })
                    .catch(function() {
                        callback('Failed getting username list');
                    });
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Password column cannot be empty'
            }
        }
    },
    first_name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'First Name column cannot be empty'
            }
        }
    },
    last_name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Last Name column cannot be empty'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: 'Email column cannot be empty'
            },
            isEmail : {
                args: true,
                msg: 'Incorrect email format'
            },
            uniqueEmail: function(email, callback) {
                const Op = sequelize.Op;
                Customer.findAll({where: {id: {[Op.ne]: this.id}}})
                    .then(function(customers) {
                        for (let i = 0; i < customers.length; i++) {
                            if (email === customers[i].email) {
                                callback('Email is already registered');
                            }
                        }

                        callback();
                    })
                    .catch(function() {
                        callback('Failed getting email list');
                    });
            }
        }
    }
  }, {
      hooks: {
          beforeCreate: function(instance, options) {
            const secret = 'none';
            const hash = crypto.createHmac('sha256', secret)
                               .update(instance.username)
                               .digest('hex');

            instance.password = hash;
          }
      }
  });
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Frame, {through: models.Order});
    Customer.belongsToMany(models.Handlebar, {through: models.Order});
    Customer.belongsToMany(models.Rim, {through: models.Order});
  };
  return Customer;
};