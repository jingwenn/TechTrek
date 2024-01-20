import React from 'react'
import { useState, useContext } from 'react';

const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (data) => {
        // To-Do
        console.log('Attempted to Login with ' + data);
    }

    return (
        <div className='flex flex-col w-1/4 border border-black rounded-md p-9 justify-start'>
            <form>
                <h2>Login Page</h2>
                <div>Username:
                    <input></input>
                </div>
                <div>Password: 
                    <input type='password'></input>
                </div>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}


export default Login
