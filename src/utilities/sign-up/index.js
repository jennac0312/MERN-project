import axios from "axios"
const BASE_URL = '/user/signup'

export const signUp = async ( formData ) => {
    try {
        const res = await axios.post(BASE_URL, formData, {
            // method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            // body: JSON.stringify( formData )
        })
        // does not work 
        // const res = await axios(BASE_URL, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     },
        //     body: JSON.stringify( formData )
        // })
        console.log(res.data)
    } catch (error) {
        console.error( error )
    }
}

export const testSignUp = async () => {
    await axios(BASE_URL, {
        method: "GET"
    })
}