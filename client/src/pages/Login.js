import React from 'react'
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/App.Context'

const Login = props => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {authToken, setAuthToken} = useContext(AppContext);

    const handleLogin = (username, password) => {
        console.log(username);
        console.log(password);

        axios.post(
            'http://192.168.52.221:4000/user/login/', 
            {
                username: username,
                password: password
            },
            {
                headers: {
                    'Content-Type' : 'application/json'
                }
            },
        )
        .then(
            function (res) {
                console.log(res);
                setAuthToken(res.authToken);
                navigate('/home')
            }
        )
        .catch(
            function(err) {
                console.log(err);
                alert("Wrong username or password. Please try again!");
            }
        )
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-white">
            <div className='flex flex-col w-1/4 border border-black rounded-md p-9 justify-start'>
                <form>
                    <span style={{display:"block", fontWeight: "bold", marginBottom:6, textAlign: "center"}}>Login Page</span>
                    <div>Username:
                        <input 
                            name='username'
                            className='border w-full' 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />                
                    </div>
                    <div>Password: 
                        <input 
                            name='password'
                            className='border w-full' 
                            type='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button 
                            type='submit'
                            className='text-black border w-1/2 rounded-md my-2 bg-green-300' 
                            onClick={(e) => {
                                e.preventDefault();
                                handleLogin(username, password);
                            }}
                        >Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login
