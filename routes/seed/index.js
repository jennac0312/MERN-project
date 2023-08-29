const express = require("express")
const router = express.Router()
const seedCtrl = require("../../controllers/seed")

router.get( '/users', seedCtrl.addUsers )

module.exports = router