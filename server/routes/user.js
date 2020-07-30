const {
  getUsers,
  createUser,
  deleteUser,
  getName,
  getEmail,
} = require('../controllers/user');
const router = require('express').Router();

//Get all users
router.get('/list', getUsers);

//Create new user
router.post('/register', createUser);

//Get user information
router.get('/info/name/:id', getName);
router.get('/info/email/:id', getEmail);

//Update information
//ADD LATER

module.exports = router;
