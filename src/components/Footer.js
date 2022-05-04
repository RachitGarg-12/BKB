import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center">
        <div className='max-w-[1700px] w-full text-gray-50 bg-[#172337] hidden md:block'>
            <div className="flex justify-between p-8 border-b-[1px] border-gray-500">
                <div className="flex justify-evenly space-x-10">
                    <div className="flex flex-col space-y-1 text-white">
                        <span className="text-gray-300 my-1 text-sm">ABOUT</span>
                        <a href="/" className='text-[0.85rem]'>Contact us</a>
                        <a href="/" className='text-[0.85rem]'>About us</a>
                        <a href="/" className='text-[0.85rem]'>Careers</a>
                        <a href="/" className='text-[0.85rem]'>Press</a>
                        <a href="/" className='text-[0.85rem]'>Corporate Information</a>
                    </div>
                    <div className="flex flex-col space-y-1 text-white">
                        <span className="text-gray-300 my-1 text-sm">HELP</span>
                        <a href="/" className='text-[0.85rem]'>Payments</a>
                        <a href="/" className='text-[0.85rem]'>Shipping</a>
                        <a href="/" className='text-[0.85rem]'>Cancellation & Returns</a>
                        <a href="/" className='text-[0.85rem]'>FAQ</a>
                    </div>
                    <div className="flex flex-col space-y-1 text-white">
                        <span className="text-gray-300 my-1 text-sm">POLICY</span>
                        <a href="/" className='text-[0.85rem]'>Return Policy</a>
                        <a href="/" className='text-[0.85rem]'>Terms of Use</a>
                        <a href="/" className='text-[0.85rem]'>Security</a>
                        <a href="/" className='text-[0.85rem]'>Privacy</a>
                        <a href="/" className='text-[0.85rem]'>Sitemap</a>
                    </div>
                    <div className="flex flex-col space-y-1 text-white">
                        <span className="text-gray-300 my-1 text-sm">SOCIAL</span>
                        <a href="/" className='text-[0.85rem]'>Facebook</a>
                        <a href="/" className='text-[0.85rem]'>Twitter</a>
                        <a href="/" className='text-[0.85rem]'>Youtube</a>
                    </div>
                </div>
                <div className="flex justify-evenly space-x-8 border-gray-500 border-l-[1px] pl-8">
                    <div className="flex flex-col space-y-1 text-white">
                        <span className="text-gray-300 my-1 text-sm">Mail Us:</span>
                        <p className='text-[0.8rem]'>BKB Internet Private Limited, </p>
                        <p className='text-[0.8rem]'> Buildings Alyssa, Begonia &amp; </p>
                        <p className='text-[0.8rem]'> Clove Embassy Tech Village, </p>
                        <p className='text-[0.8rem]'> Outer Ring Road, Devarabeesanahalli Village, </p>
                        <p className='text-[0.8rem]'> Bengaluru, 560103, </p>
                        <p className='text-[0.8rem]'> Karnataka, India</p>
                    </div>
                    <div className="flex flex-col space-y-1 text-white">
                        <span className="text-gray-300 my-1 text-sm">Registered Office Address:</span>
                        <p className='text-[0.8rem]'>BKB Internet Private Limited, </p>
                        <p className='text-[0.8rem]'> Buildings Alyssa, Begonia &amp; </p>
                        <p className='text-[0.8rem]'> Clove Embassy Tech Village, </p>
                        <p className='text-[0.8rem]'> Outer Ring Road, Devarabeesanahalli Village, </p>
                        <p className='text-[0.8rem]'> Bengaluru, 560103, </p>
                        <p className='text-[0.8rem]'> Karnataka, India </p>
                        <p className='text-[0.8rem]'> CIN : U51109KA2012PTC066107 </p>
                        <p className='text-[0.8rem]'> Telephone: <a href="tel:18002029898" className='text-[0.85rem] text-blue-500'>1800 202 9898</a></p>
                    </div>
                </div>
            </div>
            <div className='flex py-4 px-8 items-center justify-between'>
                <div className='flex justify-evenly space-x-5'>
                    <span className='text-[0.9rem]'><i className="fas fa-box mr-2 text-yellow-400"></i>Sell on BKB</span>
                    <span className='text-[0.9rem]'><i className="fas fa-star mr-2 text-yellow-400"></i>Advertise</span>
                    <span className='text-[0.9rem]'><i className="fas fa-gift mr-2 text-yellow-400"></i>Gift Cards</span>
                    <span className='text-[0.9rem]'><i className="fas fa-question-circle mr-2 text-yellow-400"></i>Help Center</span>
                </div>
                <div className='text-[0.95rem]'>
                    &copy; 2022-2032 BKB.com
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;
