var express = require('express');
var router = express.Router();

const users = [{
  id: 1,
  username: "Leticia",
  dateOfBirth: new Date(1997, 3, 22),
  phone: "0912345678",
  email: "cia@test.com",
  password: "123456789",

}, {
  id: 2,
  username: "Wen",
  dateOfBirth: new Date(1998, 11, 27) ,
  phone: "0987654321",
  email: "wen@test.com",
  password: "987654231",
}];

/* POST userInfo */
router.post('/', function(req, res, next) {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const user = users.find(user => user.email === userEmail && user.password === userPassword);
  if (user) {
    res.send({username: user.username});
  } else {
    return res.status(400).send('Invalid email or passowrd.')
  }
});

module.exports = router;
