import React, { useState } from "react"
// import { hashSync } from "bcrypt" // error with bcrypt
import supabase from "../supabaseClient"

const SignUp = () => {
    // const bcrypt = require('bcrypt')
    // const [username, setUsername] = useState('')
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleSignUp = async (event) => {
    //     event.preventDefault()
    //     const hashedPassword = hashSync(password, 10)
    //     const { user, error } = await supabase.auth.signUp({
    //         email: email,
    //         password: hashedPassword
    //     })
    //     if (error) {
    //         console.log('Error signing up:', error.message)
    //     }
    //     else {
    //         console.log('User registered successfully:', user)
    //         const { error } = await supabase
    //             .from('users')
    //             .insert([{ username, first_name: firstName, last_name: lastName, email }])
    //         if (error) {
    //             console.log('Error adding user to database:', error.message)
    //         }
    //         else {
    //             console.log('User added to database successfully.')
    //         }
    //     }
    // }

    return (
        // <form onSubmit={handleSignUp}>
        //     <label>
        //         Username:
        //         <input
        //         type="text"
        //         value={username}
        //         onChange={(event) => setUsername(event.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <label>
        //         First Name:
        //         <input
        //             type="text"
        //             value={firstName}
        //             onChange={(event) => setFirstName(event.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <label>
        //         Last Name:
        //         <input
        //         type="text"
        //         value={lastName}
        //         onChange={(event) => setLastName(event.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <label>
        //         Email:
        //         <input
        //         type="email"
        //         value={email}
        //         onChange={(event) => setEmail(event.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <label>
        //         Password:
        //         <input
        //         type="password"
        //         value={password}
        //         onChange={(event) => setPassword(event.target.value)}
        //         />
        //     </label>
        //     <br />
        //     <button type="submit">Sign Up</button>
        // </form>
        <h1>Sign Up</h1>
    )
}

export default SignUp
