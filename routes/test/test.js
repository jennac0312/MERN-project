const express = require("express")
const router = express.Router()
const testCtrl = require("../../controllers/test")

router.get( '/', testCtrl.test )

router.get( '/testing', testCtrl.testing )

module.exports = router