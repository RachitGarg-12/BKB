import React, { useState } from 'react'
import SignUp from '../assets/login.jpg'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Signup = () => {

    const [credentials, setCredentials] = useState({ email: "", phone: "", password: "", name: "", cpassword: "" });

    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.cpassword !== credentials.password) {
            return alert('Password and Confirm Password field should be same!')
        }
        const response = await fetch(`http://localhost:8000/api/auth/createuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, phone: credentials.phone })
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            alert('You are Signed Up successfully');
            history.push('/');
            window.location.reload();
        }
        else {
            alert('Some Error Occurred');
        }
    }

    const onChange = (e) => {
        // console.log('Onchange is called');
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='md:m-auto md:w-[65%] mx-4 my-28 md:my-20 flex flex-col sm:flex-row shadow-md shadow-gray-300  max-w-[1000px]'>
            <div className='sm:w-1/3 flex justify-center'>
                <img src={SignUp} alt="" className='h-full' />
            </div>
            <div className='sm:w-2/3'>
                <form action="" onSubmit={handleSubmit} className='flex flex-col mx-6 space-y-5 '>
                    <input className='mt-11 px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="name" name="name" id="name" placeholder='Enter Name ' onChange={onChange} value={credentials.name} />
                    <input className=' px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="email" name="email" id="email" placeholder='Enter Email' autoComplete='username' onChange={onChange} value={credentials.email} />
                    <input className=' px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="phone" name="phone" id="phone" placeholder='Enter Mobile Number ' onChange={onChange} value={credentials.phone} />
                    <input className=' px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="password" name="password" autoComplete='current-password' id="password" placeholder='Enter Password' onChange={onChange} value={credentials.password} />
                    <input className=' px-1 py-2 border-b-[1.5px] focus:border-[#2874f0] outline-none' type="text" name="cpassword" id="cpassword" placeholder='Confirm Your Password' onChange={onChange} value={credentials.cpassword} />
                    <p className='text-xs text-muted'>By continuing, you agree to BKB's <span className='text-util text-xs'>Terms of Use</span>  and <span className='text-util text-xs'>Privacy Policy</span>.</p>

                    <button className='my-2 text-white bg-[#fb641b] font-semibold py-2'>Continue</button>

                    <hr />
                </form>
                <div className='text-center my-3'>
                    <Link to="/login" className='text-util text-sm font-semibold'>Existing User? Log in</Link>
                </div>
            </div>

        </div>
    )
}

export default Signup