const { Router } = require('express');

const {
  getAllUsers,
  createUser,
  getUserById,
} = require('../handlers/user.handler');

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/user', createUser);

module.exports = router;
