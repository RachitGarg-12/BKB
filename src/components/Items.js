import React from 'react'
import { Link } from 'react-router-dom'

const item = ({itemDetails}) => {
    let {imgLink,category,price,title,owner,itemCode} = itemDetails;

    return (
        <section className="text-gray-600 body-font mx-2">
                <div className="flex flex-wrap">
                    <div className="p-4 ">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                            <Link to={`/product/${itemCode}`}>
                            <img className={"lg:h-48 md:h-36 w-full object-cover object-center"} src={imgLink} />
                            </Link>
                            <div className="p-6 ">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category.substr(0,1).toUpperCase()+category.substr(1,category.length)}</h2>
                                <Link to={`/product/${itemCode}`}><h1 className="title-font font-medium text-gray-900 mb-1">{title.substr(0,Math.min(title.length,15))}...</h1></Link>
                                <p className="leading-relaxed">{price}</p>
                                <div className="flex flex-col flex-wrap ">
                                    <Link to={`/product/${itemCode}`}className="text-indigo-500 inline-flex items-center text-sm md:mb-2 lg:mb-0">Quick View
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <span className="text-gray-400 mr-3 leading-none text-sm pr-2 py-1 border-r-2 border-gray-200">
                                        {owner}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default item