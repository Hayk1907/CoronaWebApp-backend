const { Router } = require('express');

const { getAllUsers, createUsesr } = require('../handlers/user.handler');

const router = Router();

router.get('/users', getAllUsers);
router.post('/user', createUsesr);

module.exports = router;
