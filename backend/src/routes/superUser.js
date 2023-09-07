const express = require('express');
const router = express.Router();
const superUserController = require('../controllers/superUser');

router.post('/sudo', superUserController.superUser);

module.exports = router;