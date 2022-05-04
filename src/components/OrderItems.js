import React from 'react'
import { Link } from 'react-router-dom';

const OrderItems = ({ orderDetails }) => {
    let { itemCode, title, discount, qty, price, date, imgLink ,delivered} = orderDetails;
    return (
        <div className=' p-3 border-[1px] border-gray-300 my-2 mx-4 hover:shadow-lg cursor-pointer'>
            <Link to={`/product/${itemCode}`} className="flex flex-col sm:flex-row">
                <div className='flex justify-center items-center sm:w-1/6'>
                    <img src={imgLink} className='h-20 ' alt="" />
                </div>
                <div className="flex flex-col px-3 items-center justify-evenly sm:flex-row w-full">
                    <div className="orderDetails mx-4 sm:w-1/2">
                        <h3 className="itemName text-sm">{title}</h3>
                        <span className='text-green-600 font-semibold text-xs'>{discount}</span>
                        <p className='text-muted text-xs'>Quantity : {qty}</p>
                    </div>
                    <p className="price text-sm mx-2 sm:w-1/6">₹{price}</p>
                    <div className="deliverDate mx-1 sm:w-1/3">
                        <div className='flex items-center'>
                            <span className='w-2.5 h-2.5 mt-0.5 rounded-full mr-1 bg-green-600'> </span>
                            {!delivered && <p className='text-sm my-1 font-semibold'> Delivery expected on {date.toString().substr(0,10)}</p>}
                            {delivered && <p className='text-sm my-1 font-semibold'> Delivered on {date.toString().substr(0,10)}</p>}
                        </div>
                        {delivered && <p className='text-xs my-1'>Your item has been delivered</p>}
                        {!delivered && <p className='text-xs my-1'>Your item is on the way</p>}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default OrderItems