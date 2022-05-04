import React, { useState } from 'react'
import LoginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            alert('You are Logged In successfully');

            history.push('/');
            window.location.reload();
        }
        else {
            alert('Please enter correct credentials');
        }
    }

    const onChange = (e) => {
        // console.log('Onchange is called');
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='md:m-auto md:w-[60%] mx-4 my-28 md:my-20 flex flex-col sm:flex-row shadow-md shadow-gray-300  max-w-[1000px]'>
            <div className='sm:w-1/3 flex justify-center'>
                <img src={LoginImg} alt="" className='h-full' />
            </div>
            <div className='sm:w-2/3'>
                <form action="" onSubmit={handleSubmit} className='flex flex-col mx-6 space-y-5 '>
                    <input className='mt-11 px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="email" name="email" id="email" placeholder='Enter Email' onChange={onChange} value={credentials.email}/>
                    <input className=' px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="password" name="password" id="password" placeholder='Enter Password' onChange={onChange} value={credentials.password}/>
                    <p className='text-xs text-muted'>By continuing, you agree to BKB's <span className='text-util text-xs'>Terms of Use</span>  and <span className='text-util text-xs'>Privacy Policy</span>.</p>

                    <button className='my-2 text-white bg-[#fb641b] font-semibold py-2'>Login</button>

                    <hr />
                </form>
                <div className='text-center mt-12 mb-2'>
                    <Link to="/signup" className='text-util text-sm font-semibold'>New to BKB? Create an account</Link>
                </div>
            </div>

        </div>
    )
}

export default Login;