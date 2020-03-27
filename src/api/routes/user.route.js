const { Router } = require('express');

const { getAllUsers } = require('../handlers/user.handler');

const router = Router();

router.get('/users', getAllUsers);

module.exports = router;
