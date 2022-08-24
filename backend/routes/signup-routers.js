

const express = require("express");
const { signupUser, updateProfile, getSingleUsers } = require("../controller/signup-controller");

const router = express.Router()
router.route("/").post(signupUser)
// router.route("/").get(getAllUsers)
router.route("/:id").put(updateProfile).get(getSingleUsers)

module.exports = router;