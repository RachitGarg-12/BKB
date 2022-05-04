import OrderItems from './OrderItems'
import React, { useState, useEffect } from 'react'
import { GrEmptyCircle } from 'react-icons/gr'

const Orders = () => {
    const [searchVal, setSearchVal] = useState("");
    const [items, setItems] = useState([]);
    const getOrders = async () => {
        const response = await fetch(`http://localhost:8000/api/auth/getorders`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();
        setItems(json);
    }

    const searchRes = ()=>{
        for (let i=0;i<items.length;i++){
            let item = items[i];
            console.log(item);
            let itm = document.getElementById(item.itemCode+item.date);
            if (!item.title.toLowerCase().includes(searchVal)){
                itm.style.display = 'none';
            }
            else {
                itm.style.display = 'block';
            }
        }
        setSearchVal("");
    }

    const onChange = (e) => {
        // console.log('Onchange is called');
        setSearchVal(e.target.value);
    }

    useEffect(() => {
        getOrders();
        // len = Object.keys(itemDetails.description[0].para)[0].length;
        // eslint-disable-next-line
    }, [])
    console.log(items);


    return (
        <div className='flex justify-center my-16'>
            <div className='max-w-[1700px] flex flex-col w-full'>
                {items.length > 0 && <div className='flex sm:block px-3 w-full mt-11 md:mt-4 -space-x-8'>
                    <input type="search" name="orders" id="orders" placeholder='Search your orders here' className='text-sm rounded-sm w-11/12 max-w-[1400px] m-auto outline-none focus:border-[#2874f0] border-[1px] border-gray-300 px-4 py-2 pr-11' value={searchVal} onChange={onChange} />
                    <button className='w-1/8 text-center text-white bg-util px-3 py-[0.61rem] rounded-r-sm text-sm' onClick={searchRes}>Search</button>
                </div>}
                <div className=' flex flex-col sm:flex-row w-full'>
                    <div className="sm:w-1/3 my-2 px-3">
                        <img src="https://www.comalytics.com/wp-content/uploads/2019/07/online-shopping-process.jpg" alt="" />
                    </div>
                    <div className="sm:w-2/3">
                        {items.length > 0 && <div className="orderItems flex flex-col">
                            {items.map((item) => {
                                return <div key={item.date} id={item.itemCode+item.date}><OrderItems orderDetails={item}  /></div>
                            })
                            }
                        </div>}
                        {items.length === 0 && <div className='flex justify-evenly flex-col items-center font-bold m-11 min-h-[60vh]'>
                            <p className='text-xl flex-col flex items-center'>
                                <GrEmptyCircle className='text-2xl text-orange-600' /> You haven't order any product till Now!
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders