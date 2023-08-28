const test = ( req, res ) => {
    res.json('Testing')
}

const testing = ( req, res ) => {
    res.json('second testing working')
}

module.exports = {
    test, testing
}