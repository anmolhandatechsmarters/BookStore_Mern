const express = require("express");
const router = express.Router();
const {  InsertData, LoginUser } = require("../Controller/user");

router.post("/submitUser",InsertData)
router.post("/loginuser",LoginUser)
module.exports = router;
