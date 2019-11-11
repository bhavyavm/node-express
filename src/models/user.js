'user strict';
var sql = require('./db.js');

var User = function (user) {
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
  this.created_at = new Date();
}
User.getAllusers = function (result) {
  sql.query("SELECT * FROM users", function (err, res) {
    if (err) {
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
}
User.getUserById = function (userId, result) {
  db.sql('SELECT * FROM users where id = ?', userId, function (err, res) {
    if (err) {
      result(null,err);
    }else{
      result(null,res);
    }
  });
}
User.createUser = function (newUser, result) {
  db.query('INSERT INTO users set ?', newUser, function (err, res) {
    if (err) {
      result(err, null)
    } else {
      result(null, res.insertId);
    }
  })
}


module.exports= User;