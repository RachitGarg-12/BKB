import React from 'react'
import FilterItems from './FilterItems'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Filter = () => {

  const location = useLocation();
  // console.log(location.pathname.substring(8,location.pathname.length);
  const [catItems, setCatItems] = useState([]);
  const getItems = async () => {
    const response = await fetch(`http://localhost:8000/api/auth/getproducts/${location.pathname.substring(8, location.pathname.length)}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    setCatItems(json);
  }

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, [])
  // console.log(catItems)

  return (
    <div className='flex justify-center my-24 md:my-16'>
      <div className="max-w-[1700px] w-full my-2 mx-11">
        <h2 className='font-bold text-2xl'>{catItems.length} Search Results Found For Your Query</h2>
        <div className=''>
          {
            catItems.map((item)=>{
              return <FilterItems key={item.itemCode} item={item.itemCode} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Filter