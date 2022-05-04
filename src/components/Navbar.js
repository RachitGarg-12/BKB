import React, { useEffect, useState } from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import { useLocation } from 'react-router-dom';
import { FcBusinessContact } from 'react-icons/fc'
import { BiAddToQueue } from 'react-icons/bi'

const Navbar = () => {
    let location = useLocation();
    let history = useHistory();
    const [logged, setLogged] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLogged(true);
        }
        // eslint-disable-next-line
    }, [])

    const onClick = () => {
        if (!logged) {
            history.push('/login');
        }
        const hamItem = document.getElementById('hamItem');
        let dis = hamItem.style.display;
        if (dis === 'none') {
            hamItem.style.display = 'block';
        } else {
            hamItem.style.display = 'none';
        }
    };

    const loggedIn = () => {
        localStorage.clear();
        history.push('/');
        window.location.reload();
    }

    const onChange = (e) => {
        setSearchVal(e.target.value)
    }

    const handleSearch = (e) => {
        // if(location.pathname.substring(0,7)==='/search'){
        //     location.pathname = '/search/'+searchVal.toString()
        //     history.push('/search/'+searchVal.toString())
        //     // window.location.reload();
        // }
        // alert('reload '+searchVal)
        setSearchVal("");
    }

    const [admin, setAdmin] = useState(null);


    const verfiyAdmin = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/getallitems`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();
        setAdmin(json.success);
    }

    useEffect(() => {
        verfiyAdmin();
        // len = Object.keys(itemDetails.description[0].para)[0].length;
        // eslint-disable-next-line
    }, [])
    // console.log(admin);

    return (
        <div className='bg-util fixed top-0 right-0 left-0 z-30 '>
            <nav className=' max-w-[1700px] m-auto py-3 md:px-8 flex md:justify-evenly justify-between items-center '>
                <div className="hamburger ml-3 flex md:hidden items-center" onClick={onClick}>
                    <div>
                        <div className="line h-0.5 w-3.5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-3.5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-3.5 bg-white my-0.5"></div>
                    </div>
                    <div>
                        <Link className='italic font-bold text-white px-2 text-xl flex items-center mr-1 cursor-pointer' to="/">
                            BKB
                        </Link>
                    </div>
                </div>
                <div className="logo flex w-1/2">
                    <Link to="/" className='italic font-bold text-white px-2 text-xl items-center mr-1 cursor-pointer hidden md:flex '>BKB</Link>
                    {/* <form action="/query" className='flex w-full' onSubmit={handleSubmit}> */}
                    <input type="text" name="search" id="search" placeholder='Search for products, brands and more' className='text-sm px-4 py-2 w-[90%] rounded-sm hidden md:block outline-none' onChange={onChange} value={searchVal} />
                    <Link to={`/search/${searchVal.toString()}`} onClick={handleSearch} className="hidden md:block">
                        <i className="fas fa-search bg-none -translate-x-7 cursor-pointer pt-[0.65rem] text-util "></i>
                    </Link>
                    {/* </form> */}
                </div>

                <div className={`text-white  flex justify-evenly items-center`}>
                    {logged && <><div className="dropdown hidden md:block cursor-pointer">
                        <span className='flex'>Account <span className=' ml-1 arrow'> &#x25B4;</span></span>
                        <div className="hidden dropdown-content flex-col absolute z-10 text-black -translate-x-8 rounded-sm ">
                            <Link to="/account"><i className="far fa-user-circle"></i>My Profile</Link>
                            <Link to="/orders"><i className="fas fa-folder"></i>Orders</Link>
                            <Link to="/contact" className='py-2'><FcBusinessContact className='mr-2 ml-2' />Contact Us</Link>
                            <Link to="/" onClick={loggedIn}><i className="fas fa-power-off"></i>Logout</Link>
                        </div>
                        <div>
                        </div>
                    </div>

                    </>}
                    {!logged && <div className='hidden md:block space-x-4'>
                        <Link to='/login' className='bg-white text-util rounded-sm px-4 py-1'>Login</Link>
                        <Link to='/signup' className='bg-white text-util rounded-sm px-4 py-1'>SignUp</Link>
                    </div>
                    }

                    <span className='flex items-center cursor-pointer'>
                        <div className='md:hidden flex items-center'>
                            {logged && <Link to={'/account'}><i className="fas fa-user-check mx-3"></i></Link>}
                            {!logged && <Link to={'/login'}><HiOutlineLogin className='mx-2 text-lg' /></Link>}
                        </div>
                        <div className='flex rounded-md mx-1'>
                            <Link to='/login' className='bg-white  text-util font-bold border-[3px] border-[#7520f5] md:hidden flex rounded-md px-3 pr-4 items-center text-sm py-1'><BiAddToQueue className='mx-1' />Sell</Link>
                            {admin && <Link to='/admin' className='bg-white  text-util font-bold border-[3px] border-[#7520f5] md:hidden flex rounded-md px-3 pr-4 items-center text-sm py-1'>Admin</Link>}
                            {admin!==null && admin===false && <Link to='/servicing' className='bg-white  text-util font-bold border-[3px] border-[#7520f5] md:hidden flex rounded-md px-3 pr-4 items-center text-sm py-1'>Service</Link>}
                        </div>
                    </span>
                    <div className='border-[3px] hidden md:flex border-gray-300 mx-1 rounded-md'>
                        <Link to='/login' className='bg-white text-util font-bold border-[3px] border-[#7520f5]  flex rounded-md px-3 pr-4 items-center '><BiAddToQueue className='mx-1' />Sell</Link>
                    </div>
                    <div className='border-[3px] hidden md:flex border-gray-300 mx-1 rounded-md'>
                        {admin &&
                            <Link to='/admin' className='bg-white text-util font-bold border-[3px] border-[#7520f5]  flex rounded-md px-3 pr-4 items-center '>Admin</Link>}

                        {admin!==null && admin===false &&
                            <Link to='/servicing' className='bg-white text-util font-bold border-[3px] border-[#7520f5]  flex rounded-md px-3 pr-4 items-center '>Service</Link>}
                    </div>
                </div>
            </nav>

            <div className='bg-util md:hidden flex justify-center items-center -mt-1'>
                <Link to={`/search/${searchVal.toString()}`} onClick={handleSearch}><i className="fas fa-search bg-none translate-x-7 cursor-pointer text-util "></i></Link>
                <input type="search" name="search" id="search" placeholder='Search for products, brands and more' className='text-sm px-9 py-2 w-full my-1 mr-3.5 rounded-sm ' onChange={onChange} value={searchVal} />
            </div>

            {logged && <div className="h-[100vh] absolute top-0 bg-white border-1 border-gray-300 z-20 hidden w-full max-w-[66%] min-w-[50%] fade" id='hamItem'>
                <div className='w-full bg-util flex justify-between items-center'>
                    <span className='text-white px-2 py-3 flex items-center cursor-pointer text-[0.9rem]'><i className="far fa-user-circle mr-2"></i>Prashant Singh
                    </span>
                    <i className="fas fa-times text-white px-3" onClick={onClick}></i>
                </div>
                <div className="items flex flex-col py-2" onClick={onClick}>
                    <Link to="/account" className='py-2 '><i className="fas fa-user-tie mx-2"></i>My Profile</Link>
                    <Link to="/orders" className='py-2 '><i className="fas fa-folder mx-2"></i>My Orders</Link>
                    <Link to="/contact" className='py-2 flex '><FcBusinessContact className='mr-2 mx-2' />Contact Us</Link>
                    <Link to="/" className='py-2' onClick={loggedIn}><i className="fas fa-power-off mx-2"></i>Logout</Link>
                </div>
            </div>}
        </div>
    );
};

export default Navbar;
