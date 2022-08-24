const express = require("express");
const { cretedData, getAllCategoryData, updateCategoryData } = require("../controller/category-controller");
 

const router = express.Router()

router.route("/category").post(cretedData)
router.route("/category/:id").get(getAllCategoryData).put(updateCategoryData)
module.exports = router;