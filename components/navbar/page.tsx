"use client"
import Image from 'next/image';
import { useState} from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <nav className='bg-white shadow-md py-4'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center px-6'>
        <Image src="/images/Uniontwo.svg" alt='image is here' width={20} height={20} className=''/>
        <Image src="/images/Union.svg" alt='image is here' width={20} height={20} className=''/>
        
            <h1 className='text-3xl font-bold text-black pr-60'>Ddsnr</h1>
            
            

            <button
            className='lg:hidden text-3xl text-black'
            onClick={toggleMobileMenu}
            
            >
                &#9776;
            </button>

            <div
            className={`lg:flex space-y-4 lg:space-y-0 lg:space-x-8 items-center ${
                isMobileMenuOpen ? "block " : "hidden"
                } lg:block mt-4 lg:mt-0`}
            >
                <ul className='flex flex-col lg:flex-row lg:space-y-0 lg:space-x-8'>
                    <li className='text-lg font-medium text-gray-800 hover:text-black'>
                        Home
                    </li>
                    <li className='text-lg font-medium text-gray-800 hover:text-black'>Courses</li>
                    <li className='text-lg font-medium text-gray-800 hover:text-black'>Services</li>
                    <li className='text-lg font-medium text-gray-800 hover:text-black'>Achievement</li>
                    <li className='text-lg font-medium text-gray-800 hover:text-black'>About Us</li>
                    <li className='text-lg font-medium text-gray-800 hover:text-black'>Testimonial</li>

                    

                </ul>

                <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
                    <button className='bg-white text-black border-2 border-black px-6 py-3 rounded-lg w-full lg:w-auto'>
                        Login
                    </button>

                    <button className='bg-black text-white  px-6 py-3 rounded-lg w-full lg:w-auto'>
                        Sign Up
                    </button>

                </div>


            </div>

        </div>

    </nav>
    
  );
};

export default Navbar 
