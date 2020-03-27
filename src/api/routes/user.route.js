const { Router } = require('express');

const { getAllUsers, createUser } = require('../handlers/user.handler');

const router = Router();

router.get('/users', getAllUsers);
router.post('/user', createUser);

module.exports = router;
