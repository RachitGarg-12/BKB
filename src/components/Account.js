import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import userImg from '../assets/user.svg'
import { Link } from "react-router-dom";
import {FcBusinessContact} from 'react-icons/fc'
import {SiSellfy} from 'react-icons/si'

const Account = () => {

    const [user, setUser] = useState({ name: "" });
    const [newVal, setNewVal] = useState({ fname: "", lname: "" });
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser();
        }
        // eslint-disable-next-line
    }, [])


    const getUser = async (e) => {
        const response = await fetch(`http://localhost:8000/api/auth/getuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });

        const json = await response.json();
        setUser({ name: json.name });
        // console.log(json);
    }

    const updateName = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/updateId`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name: newVal.fname + " " + newVal.lname })
        });

        const json = await response.json();
        setUser({ name: json.user.name });
        setNewVal({ fname: "", lname: "" })
        // console.log(json);
    }

    const onChange = (e) => {
        setNewVal({ ...newVal, [e.target.name]: e.target.value });
    }

    const enableForm = (e) => {
        let editDetails = document.getElementById('editDetails');
        if (editDetails.style.display === 'none') {
            e.target.innerText = 'Cancel';
            editDetails.style.display = 'block';
        }
        else {
            e.target.innerText = 'Edit';
            editDetails.style.display = 'none';
        }
    }

    let history = useHistory();
    const logout = () => {
        localStorage.clear();
        history.push('/');
        window.location.reload();
    }

    return (
        <div className="flex justify-center my-24 md:my-16">
            <div className=' max-w-[1700px] flex justify-evenly my-4 sm:m-8 flex-col md:flex-row'>
                <div className="md:w-1/4 mx-2 flex flex-col space-y-5">
                    <div className="user flex shadow-md shadow-gray-300 py-2 px-4">
                        <div className="userimage mx-4">
                            <img src={userImg} alt="user" />
                        </div>
                        <div className=''>
                            <p className='text-xs'>Hello,</p>
                            <h2 className='font-bold'>{user.name}</h2>
                        </div>
                    </div>
                    <div className="hidden shadow-md md:flex flex-col shadow-gray-300 p-4">
                        <Link to={'/orders'} className='mx-2 my-2 text-muted font-semibold'><i className="fas fa-folder mr-3 pb-4 text-util"></i>MY ORDERS</Link>
                        <Link to={'/contact'} className='mx-2 mb-2 text-muted font-semibold flex items-center'><FcBusinessContact className='mr-2'/>CONTACT US</Link>
                        <Link to={'/sell'} className='mx-2 my-2 text-muted font-semibold flex items-center'><SiSellfy className='text-util mr-2'/>ITEMS TO SELL</Link>
                        <div>
                            <button onClick={logout} className='mx-2 py-3 text-muted font-semibold'><i className="fa fa-power-off mr-3 text-util"></i>Logout</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 mx-2 p-5 shadow-md shadow-gray-300 h-fit">
                    <h2 className='font-bold my-2 text-sm md:text-base'>Personal Information <span onClick={enableForm} className='text-util text-sm mx-4 d cursor-pointer'>Edit</span></h2>
                    <form action="" onSubmit={updateName} id="editDetails" className='hidden space-y-3 py-2 fade'>
                        <input value={newVal.fname} onChange={onChange} className='px-4 outline-none border-[1px] mx-2 py-1 bg-gray-100 border-gray-300' type="text" name="fname" id="fname" required />
                        <input value={newVal.lname} onChange={onChange} className='px-4 outline-none border-[1px] mx-2 py-1 bg-gray-100 border-gray-300' type="text" name="lname" id="lname" required />
                        <button className='bg-util px-4 mx-2 py-1 rounded-sm text-white'>Save</button>
                    </form>
                    <hr />
                    {/* <h2 className='font-bold my-2'>Email Address <a href="/" className='text-util text-sm font-normal mx-4'>Edit</a></h2>
                <h2 className='font-bold my-2'>Mobile Number <a href="/" className='text-util text-sm font-normal mx-4'>Edit</a></h2> */}

                    <div className="faqs my-5">
                        <h2 className='sm:text-lg font-semibold my-3'>FAQs</h2>
                        <div className='my-3'>
                            <h3 className='font-semibold text-sm my-2'>What happens when I update my email address (or mobile number)?</h3>
                            <p className='text-sm mb-6'>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                        </div>
                        <div className='my-3'>
                            <h3 className='font-semibold text-sm my-2'>When will my BKB account be updated with the new email address (or mobile number)?</h3>
                            <p className='text-sm mb-6'>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                        </div>
                        <div className='my-3'>
                            <h3 className='font-semibold text-sm my-2'>What happens to my existing BKB account when I update my email address (or mobile number)?</h3>
                            <p className='text-sm mb-6'>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                        </div>
                        <div className='my-3'>
                            <h3 className='font-semibold text-sm my-2'>Does my Seller account get affected when I update my email address?</h3>
                            <p className='text-sm mb-6'>BKB has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                        </div>
                    </div>

                    <button className='my-5 text-xs font-semibold text-util '>Deactivate Account</button>
                </div>
            </div>
        </div>
    )
}

export default Account;