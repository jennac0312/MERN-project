const express = require("express")
const router = express.Router()
const testCtrl = require("../../controllers/test/test")

router.get( '/', testCtrl.test )

module.exports = router