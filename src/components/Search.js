import React from 'react'
import FilterItems from './FilterItems'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Search = () => {
    const location = useLocation();
    const [searchItems, setSearchItems] = useState([]);
    // console.log(location.pathname);
    const getItems = async () => {
        const response = await fetch(`http://localhost:8000/api/auth${location.pathname}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        setSearchItems(json);
    }

    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, [location.pathname])
    // console.log(catItems)

    return (
        <div className='flex justify-center my-24 md:my-16'>
            <div className="max-w-[1700px] w-full my-2 mx-11">
                <h2 className='font-bold text-2xl'>{searchItems.length} Search Results Found For Your Query</h2>
                <div className=''>
                    {
                        searchItems.map((item) => {
                            return <FilterItems key={item.itemCode} item={item.itemCode} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Search