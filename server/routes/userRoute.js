const expres = require('express');
const { UserController } = require('../controllers/UserController');

const UserRoutes = expres.Router();


UserRoutes.post('/register', UserController.register)
UserRoutes.post('/confirm', UserController.confirm)
UserRoutes.post('/login', UserController.login)
UserRoutes.post('/token', UserController.token)
UserRoutes.post('/forgetpassword', UserController.forgetpassword)
UserRoutes.put('/changepassword', UserController.changepassword)



module.exports = {
  UserRoutes
}