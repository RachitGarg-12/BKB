import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BsFillCartCheckFill, BsFillLightningFill, BsCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Product = () => {
    const location = useLocation();

    const [found, setFound] = useState(false);
    let iCode = location.pathname.substring(9, location.pathname.length);
    // let len=1;
    const [itemDetails, setItemDetails] = useState({
        "itemCode": "1",
        "category": "mobiles",
        "imgLink": [""],
        "title": "",
        "location": "",
        "owner": "",
        "used": "",
        "price": 8000,
        "description": [{}]
    });

    const getOrders = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/getorders`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();
        // console.log(json);
        for (let i=0;i<json.length;i++) {
            let item = json[i].itemCode;
            // console.log(item,iCode);
            if (item === iCode) {
                // console.log(item);
                setFound(true);
            }
        }
    }


    const getItem = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/getitem/${iCode}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        setItemDetails(json[0]);
        // len = Object.keys(json[0].description[0].para)[0].length;
    }
    

    const order = async () => {
        let item = itemDetails;
        console.log(item);
        const response = await fetch(`http://localhost:8000/api/auth/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ itemCode: item.itemCode, title: item.title, imgLink: item.imgLink[0], price: item.price, owner: item.owner, delivered: false, used: item.used })
        });
        
        const json = await response.json();
        console.log(json);
        alert('Your Order Is Placed Successfully');
    }

    const service = async () => {
        let item = itemDetails;
        console.log(item);
        const response = await fetch(`http://localhost:8000/api/auth/service`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ itemCode: item.itemCode, title: item.title, imgLink: item.imgLink[0], price: item.price, owner: item.owner, delivered: false, used: item.used })
        });
        
        const json = await response.json();
        console.log(json);
        alert('Your Item has been sent to your closest service center');
    }

    useEffect(() => {
        getItem();
        getOrders();
    }, [])

    return (
        <div className="flex justify-center my-20">
            <section className="max-w-[1700px] flex flex-col my-8 md:my-0 sm:flex-row mx-3 space-x-3 w-full">
                <div className='my-0.5 sm:w-1/3 border-[1px] border-gray-300 p-4 flex  items-center justify-between flex-col min-h-[85vh] h-fit'>
                    <img src={itemDetails.imgLink[0]} className=' max-h-[70vh] w-auto' alt="" />
                    <div className='flex flex-col lg:flex-row justify-evenly w-full my-2 '>
                        {!found && <Link onClick={order} to="/orders" className='w-full font-semibold py-3 rounded-sm px-3 text-white bg-[#ff9f00] flex items-center justify-center my-1' ><BsFillLightningFill className="mx-2"  /><span >BUY NOW</span> </Link>}
                        {found && <Link to="/servicing" onClick={service} className='w-full font-semibold py-3 rounded-sm px-3 text-white bg-[#ff9f00] flex items-center justify-center my-1'><BsFillCartCheckFill className="mx-2" /><span>SERVICING</span> </Link>}
                    </div>
                </div>
                <div className='sm:w-2/3'>
                    <div>
                        <h2 className='my-1 font-semibold'>{itemDetails.title}</h2>
                        <p className='flex'>
                            {/* <span className="rating bg-green-700 text-white text-bold w-fit text-[0.8rem] pl-1.5 px-1 rounded-sm">4.5 &#9733;</span> */}
                            <span className='text-gray-500 text-sm px-1 hidden sm:block'>Owner : {itemDetails.owner}</span>
                        </p>
                        <p className='text-green-700 text-sm my-1 font-semibold'>{itemDetails.used}</p>
                        <p className='flex items-end'>
                            <span className='mr-4 font-bold text-3xl'>₹{itemDetails.price}</span>
                            <span className='text-green-700 my-1 font-semibold mx-2'><BsCheckCircleFill /></span>
                        </p>
                    </div>
                    <div className='border-[1px] border-gray-300 my-4 mr-11'>
                        <h1 className='px-4 py-4 text-xl font-semibold'>Product Description</h1>
                        <div className='item py-2 border-t-[1px] text-xl border-gray-300  px-4 pb-3'>
                            <ul className='list-disc mx-2 text-gray-600'>
                                {Object.keys(itemDetails.description[0]).map((des) => {
                                    return <li className='text-sm ' key={des}>{des} : {itemDetails.description[0][des]}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product;