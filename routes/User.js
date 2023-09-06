const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const controller = require("../controllers/Userscontroller");

router.use(bodyparser.json());

router.get("/", controller.get);
router.get("/:id", controller.getByid);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
