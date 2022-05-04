import React from 'react';
import Image1 from '../assets/logo.png';
import Image2 from '../assets/img1.png';
import Image3 from '../assets/img2.png';
import Image4 from '../assets/img3.png';

const Slider = () => {
  let slideIndex = 0;
  let sliders = 4;

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    slideIndex = (n + sliders) % sliders;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].style.background = 'none';
      if (i === slideIndex) {
        slides[i].style.display = 'block';
        dots[i].style.backgroundColor = 'white';
      }
    }
  }
  showSlides(slideIndex);

  const automation = () => {
    setInterval(() => {
      showSlides(slideIndex);
      slideIndex++;
    }, 4000);
  }
  automation();

  return (
    <>
      {/* Slideshow container */}
      <div className="slideshow-container relative mx-2 mb-2 shadow-md shadow-gray-500 flex items-center">

        {/* <!-- Full-width images with number and caption text --> */}
        <div className="mySlides w-full fade ">
          <img src={Image1} className='w-full sm:h-[70vh] h-[50vh] ' alt='' />
        </div>
        <div className="mySlides w-full fade hidden">
          <img src={Image2} className='w-full sm:h-[70vh] h-[50vh] ' alt='' />
        </div>
        <div className="mySlides w-full fade hidden">
          <img src={Image3} className='w-full sm:h-[70vh] h-[50vh] ' alt='' />
        </div>
        <div className="mySlides w-full fade hidden">
          <img src={Image4} className='w-full sm:h-[70vh] h-[50vh] ' alt='' />
        </div>

        {/* <!-- Next and previous buttons --> */}
        <div className="buttonControl absolute w-full" >
          <button className="prev cursor-pointer font-bold md:text-[1.75rem] float-left text-white md:text-black md:bg-white pb-0.5 pt-1 px-1 md:px-[0.95rem] shadow-md md:shadow-gray-400 shadow-gray-200 md:pb-7 md:pt-8 rounded-r-md" onClick={() => { plusSlides(-1) }}>&#10094;</button>
          <button className="next cursor-pointer font-bold md:text-[1.75rem] float-right text-white md:text-black md:bg-white pb-0.5 pt-1 px-1 md:px-[0.95rem] shadow-md md:shadow-gray-400 shadow-gray-200 md:pb-7 md:pt-8 rounded-l-md" onClick={() => { plusSlides(1) }}>&#10095;</button>
        </div>
      </div>

      {/* <!-- The dots/circles --> */}
      <div className=' -translate-y-8 flex items-center justify-center space-x-2'>
        <span className="dot h-2 w-2 cursor-pointer hover:bg-gray-300 rounded-full border-[1px] border-white bg-white" onClick={() => { currentSlide(0) }}></span>
        <span className="dot h-2 w-2 cursor-pointer hover:bg-gray-300 rounded-full border-[1px] border-white" onClick={() => { currentSlide(1) }}></span>
        <span className="dot h-2 w-2 cursor-pointer hover:bg-gray-300 rounded-full border-[1px] border-white" onClick={() => { currentSlide(2) }}></span>
        <span className="dot h-2 w-2 cursor-pointer hover:bg-gray-300 rounded-full border-[1px] border-white" onClick={() => { currentSlide(3) }}></span>
      </div>
    </>
  );
};

export default Slider;
