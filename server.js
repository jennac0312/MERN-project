require("dotenv").config()
require('./config/database')
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001

const testRoute = require('./routes/test/test')

// API routes
app.use( '/test', testRoute )

// catch all
app.get( '/*', ( req, res ) => {
    res.send("You are off course Agent. Return to <HQ/>")
})

app.listen( PORT, () => {
    console.log( `Server is running on PORT ${PORT}` )
})