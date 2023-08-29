require("dotenv").config()
require('./config/database')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001

const testRoute = require('./routes/test/test')
const authRoute = require('./routes/auth/index')
const seedRoute = require('./routes/seed/')
const User = require("./models/User")

app.use(express.json())
// API routes
app.use( '/test', testRoute )

// user auth routes
app.use( '/user', authRoute )

// app.get('/user/signup', ( req, res) => {
//     res.send("user sign up")
// })

// SEED
app.use( '/seed', seedRoute )


// catch all
app.get( '/*', ( req, res ) => {
    // res.status(404).send("no api endpoint here")
    res.send("no api endpoint here")
})

app.listen( PORT, () => {
    console.log( `Server is running on PORT ${PORT}` )
})