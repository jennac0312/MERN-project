import React, { useState } from 'react'
import './signup.css'
import { signUp, testSignUp } from '../../utilities/sign-up'
import Error from '../../components/error-message/Error'

const SignUp = () => {

    const [ formData, setFormData ] = useState({})
    const [ showPassword, setShowPassword ] = useState(false)
    const [ passwordsMatch, setPasswordsMatch ] = useState(null)

    const handleChange = ( e ) => {
        e.preventDefault()
        console.log(e.target.value)

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

        console.log( formData )
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault()
        // setPasswordsMatch(formData.password === formData.confirmPassword)

        console.log( 'signing up as', formData )
        await signUp( formData )
        // await testSignUp()
    }

    const isDisabled = () => {
        // let fields = []
        // let inputs = document.querySelectorAll('form input')
        // console.log(inputs)
        // inputs.forEach((input) => {
        //     console.log(input.value)
        //     console.log( input.innerText === '' ? true : false )
        //     input.innerText === '' ? fields.push('empty') : fields.push('okay')
        // })

        const inputs = document.querySelectorAll('form input')

        for( const input of inputs ){
            if( input.value.trim() === "") return true
        }
        return false

        // console.log(fields)
        // if(formData.name === "") return true
        // if(formData.username === "") return true
        // if(formData.password === "") return true
        // if(formData.confirmPassword === "") return true

        return false
    }

  return (
    <main>
        <h1>sign up</h1>
        <form action="" autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor="">Name:</label>
                <input 
                    type="text" 
                    name='name' 
                    value={formData.name || ""}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor="">Username:</label>
                <input 
                    type="text" 
                    name='username' 
                    value={formData.username || ""}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input 
                    type="text" 
                    name='password' 
                    value={formData.password || ""}
                    className={ !showPassword ? 'asterisk' : undefined}
                    onChange={(e) => handleChange(e)}
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                >
                    { showPassword ? '🙊' : '🙈' }
                </span>
            </div>
            <div>
                <label htmlFor="">Confirm Password:</label>
                <input 
                    type="text" 
                    name='confirmPassword' 
                    value={formData.confirmPassword || ""}
                    className={ !showPassword ? 'asterisk' : undefined}
                    onChange={(e) => handleChange(e)}
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                >
                    { showPassword ? '🙊' : '🙈' }
                </span>
            </div>
            <button type='submit' disabled={isDisabled()}>Sign Up</button>
        </form>
        disabled: {String(isDisabled())}
        {/* { String(passwordsMatch) } */}
        {/* { !passwordsMatch || passwordsMatch !== null &&  */}
            <Error message="Passwords do not match"/>
        {/* } */}

    </main>
  )
}

export default SignUp
