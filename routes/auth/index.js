const express = require("express")
const router = express.Router()
const authCtrl = require("../../controllers/auth")

// POST create user
//  PATH - '/user/signup'
// router.get( '/user/signup', authCtrl.read )
router.get( '/signup', (req, res) => {
    res.send("auth get working")
} )
router.post( '/signup', authCtrl.create )

module.exports = router