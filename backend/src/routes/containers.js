const express = require('express');
const router = express.Router();
const containersController = require('../controllers/containers');

router.post('/get-containers', containersController.listContainer);

module.exports = router;