import axios from "axios"
const BASE_URL = '/test'

export const handleClick = async () => {
    console.log( 'button clicked' )
    try {
        const res = await axios( BASE_URL, {
            method: "GET",
            headers: {
                // "Content-Type" : "application/json"
            },
        })
        console.log('HANDLECLICK RESPONSE', res )

        if( res.status === 200 ){
            console.log( 'status okay' )
        }
    } catch (error) {
        console.error( error )
    }
}

export const testing = async () => {
    const res = await axios( BASE_URL + '/testing')
    console.log( res )
}