const create = async ( req, res ) => {

    try {
        console.log('adding to database')
        console.log( req.body )
        return res.send( req.body )
    } catch (error) {
        console.error( error )
    }
}

const read = ( req, res ) => {
    res.send('get route working?')
}

module.exports = {
    create, read
}