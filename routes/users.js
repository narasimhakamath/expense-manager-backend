const express = require('express');
const router = express.Router();

const {getUserDetails} = require("../controllers/users");

// GET API to get the details of a user by the ID.
router.get('/:userID', getUserDetails);

module.exports = router;