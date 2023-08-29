const User = require("../../models/User")
const fakeUsers = require("../../models/seed/users")

const addUsers = async ( req, res ) => {
    await User.deleteMany({})

    await User.create( fakeUsers )

    res.send("SEEDED, Fake users added to database")
}

module.exports = {
    addUsers
}