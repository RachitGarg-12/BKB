import React from 'react';
import SliderItems from './SliderItems';
import Review from './Review';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const Home = () => {
  return (
    <div className="flex justify-center my-24 md:my-16">
      <div className='max-w-[1700px]'>
        <div className="categories px-1.5 flex justify-evenly py-2 space-x-3 shadow-gray-400  mb-5 shadow-sm pr-2 ">
          <Link to={`/filter/mobiles`} className="cursor-pointer items hidden sm:flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Mobiles</span></Link>
          <Link to={`/filter/car`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Car</span></Link>
          <Link to={`/filter/scooter`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Scooter</span></Link>
          <Link to={`/filter/sports`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Sports</span></Link>
          <Link to={`/filter/laptop`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>laptop</span></Link>
          <Link to={`/filter/appliances`} className="hidden mdl:flex cursor-pointer items flex-col justify-center items-center"><span className='text-sm hover:text-[#7520f5] font-bold'>Appliances</span></Link>
          <Link to={`/filter/camera`} className="hidden md:flex cursor-pointer items flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Camera</span></Link>
          <Link to={`/filter/home`} className="cursor-pointer items flex flex-col justify-center items-center"><span className=' hover:text-[#7520f5] font-bold'>Home</span></Link>
        </div>

        <Slider />
        <SliderItems category="car" sliderNo={1} recmd={true} title="More On Cars" />
        <SliderItems category="mobiles" sliderNo={2} recmd={true} title="Deals On Mobiles" />
        <SliderItems category="laptop" sliderNo={3} title="Suggested for You" />

        <Review />
      </div>
    </div>
  );
};

export default Home;
