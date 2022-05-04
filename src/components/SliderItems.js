import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Items from './Items';

const SliderItems = (props) => {
    const [items, setItems] = useState([]);
    const { sliderNo, recmd, title, category } = props;

    let slideIndex = 0;
    let oneSlideItems = 4;

    const getItem = async () => {
        let response = await fetch(`http://localhost:8000/api/auth/getproducts/${category}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let json = await response.json();
        setItems(json);

    }

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let item = document.getElementsByClassName(`itemContainer${sliderNo}`)[0].childNodes;
        let slides = Math.ceil(items.length / oneSlideItems);
        // let slides = 0;
        console.log(item.length);

        slideIndex = (n + slides) % slides;
        for (let i = 0; i < items.length; i++) {
            item[i].style.display = 'none';
        }
        console.log(slides, slideIndex);
        for (let j = slideIndex * oneSlideItems; j < Math.min(slideIndex * oneSlideItems + oneSlideItems, items.length); j++) {
            item[j].style.display = 'block';
        }

        if (slideIndex === 0) {
            document.getElementsByClassName(`prev${sliderNo}`)[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName(`prev${sliderNo}`)[0].style.display = 'block';
        }

        if (slideIndex === slides - 1) {
            document.getElementsByClassName(`next${sliderNo}`)[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName(`next${sliderNo}`)[0].style.display = 'block';
        }

    }

    useEffect(() => {
        getItem();
        if (window.screen.width >= 768) {
            // showSlides(0);
        }

        // plusSlides(1);
        // plusSlides(-1);

        // eslint-disable-next-line
    }, []);
    console.log(items);



    return (
        <div className='shadow-md shadow-gray-500 my-2'>
            {/* Slideshow container */}
            <div className="header p-3 px-7 flex justify-between items-center border-b-[1px] border-gray-300 mx-2">
                <div className="heading font-semibold text-[1.35rem]">
                    {title}
                </div>
                <Link to={`/search/${category}`} className="view bg-util px-4 py-2 text-sm rounded-sm font-semibold text-white">
                    VIEW ALL
                </Link>
            </div>
            <div className="slideshow-container relative mx-2 mb-2 flex items-center justify-evenly">
                {/* <!-- Items Container --> */}
                <div className={`itemContainer${sliderNo} grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 px-7`} id="itemContainer">
                    {/* Items will be added here */}

                    {items.map((item, idx) => {
                        return (<div className='fade hover:scale-[1.1] ease-in-out duration-300' key={`${sliderNo}%${idx}`}>
                            <Items itemDetails={item} />
                        </div>)
                    })}
                </div>

                {/* <!-- Next and previous buttons --> */}
                <div className="buttonControl absolute w-full" >
                    <button className={`prev${sliderNo} cursor-pointer font-bold md:text-[1.75rem] float-left text-white md:text-black md:bg-white pb-0.5 pt-1 px-1 md:px-[0.95rem] shadow-md md:shadow-gray-400 shadow-gray-200 md:pb-7 md:pt-8 rounded-r-md`} onClick={() => { plusSlides(-1) }}>&#10094;</button>
                    <button className={`next${sliderNo} cursor-pointer font-bold md:text-[1.75rem] float-right text-white md:text-black md:bg-white pb-0.5 pt-1 px-1 md:px-[0.95rem] shadow-md md:shadow-gray-400 shadow-gray-200 md:pb-7 md:pt-8 rounded-l-md`} onClick={() => { plusSlides(1) }}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};

Items.defaultProps = {
    recmd: false,
    items: [],
    title: "No Title"
}

Items.propTypes = {
    recmd: PropTypes.bool,
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}


export default SliderItems;