import React, { useEffect, useState } from 'react'
import './signup.css'
import { signUp, testSignUp } from '../../utilities/sign-up'
import Error from '../../components/error-message/Error'

const SignUp = () => {

    const [ formData, setFormData ] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [ isDisabled, setIsDisabled ] = useState(true)
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
        setPasswordsMatch(formData.password === formData.confirmPassword)

        if( !passwordsMatch ) return
        else{
            console.log( 'signing up as', formData )
            await signUp( formData )
            // await testSignUp()
        }

    }

    const checkDisable = () => {
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
            if( input.value.trim() === ""){
                setIsDisabled(true)
                return true
            }
        }
        setIsDisabled(false)
        return false

        // console.log(fields)
        // if(formData.name === "") return true
        // if(formData.username === "") return true
        // if(formData.password === "") return true
        // if(formData.confirmPassword === "") return true

        return false
    }

    const checkPasswords = () => {
        const { password, confirmPassword } = formData

        if( password === "" || confirmPassword === "" ){
            setPasswordsMatch(false)
        } else if( password === confirmPassword ){
            setPasswordsMatch(true)
        } else {
            setPasswordsMatch(false)
        }
    }

    useEffect(() => {
        checkDisable()
        // setPasswordsMatch(false)
        // setPasswordsMatch(formData.password === formData.confirmPassword)

        return () => {
            checkPasswords()
        }
    }, [formData])

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
            <button type='submit' disabled={isDisabled}>Sign Up</button>
        </form>
        disabled: {String(isDisabled)}
        <br />
        passwords match: { String(passwordsMatch) }
        { !isDisabled && !passwordsMatch && passwordsMatch !== null ?
            <Error message="Passwords do not match"/> 
            :
            passwordsMatch && <p>Signing up</p>
        }

    </main>
  )
}

export default SignUp
