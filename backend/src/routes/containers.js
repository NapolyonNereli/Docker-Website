const express = require("express");
const router = express.Router();
const containersController = require("../controllers/containers");

router.get("/get-containers", containersController.listContainer);
router.post("/stop-container", containersController.stopContainer);

module.exports = router;
