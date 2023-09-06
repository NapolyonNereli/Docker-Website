const express = require('express');
const router = express.Router();
const dockerFileController = require('../controllers/createDockerfile');

router.post('/dockerfile', dockerFileController.createDockerfile);
router.get('/download-dockerfile', dockerFileController.downloadDockerfile);
module.exports = router;