const express = require("express");
const router = express.Router();

// Import the GetUserData controller function
const { GetUserData } = require("../Controller/user");

// Define the route for getting all users
router.get("/getalluser", GetUserData);

// Export the router
module.exports = router;
