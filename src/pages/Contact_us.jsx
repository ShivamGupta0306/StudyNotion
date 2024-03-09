import React from 'react'
import { MdChatBubbleOutline } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import ContactUsForm from '../components/ContactPage/ContactUsForm';
import Footer from '../components/common/Footer';

const Contact_us = () => {
  return (
    <>
    <div className='mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row'>
        <div className='lg:w-[40%]'>
            <div className='flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6'>
                <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                    <div className='flex flex-row items-center gap-3'>
                        <MdChatBubbleOutline height={25} width={25}/>

                        <h1 className='text-lg font-semibold text-richblack-5'>
                            Chat on us
                        </h1>
                    </div>
                    <p className='font-medium'>
                    Our friendly team is here to help. 
                    </p>
                    <p className='font-semibold'>
                    info@studynotion.com
                    </p>
                </div>

                <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                    <div className='flex flex-row items-center gap-3'>

                    <FaEarthAmericas />
                    <h1 className='text-lg font-semibold text-richblack-5'>Visit us</h1>
                    </div>

                    <p className='font-medium'>
                    Come and say hello at our office HQ.
                    </p>
                    <p className='font-medium'>
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                    </p>
                </div>

                <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                    <div className='flex flex-row items-center gap-3'>

                    <IoCall width={25} height={25}/>
                    <h1 className='text-lg font-semibold text-richblack-5'>Call us</h1>
                    </div>
                    <p className='font-medium'>
                        Mon - Fri From 8am to 5pm
                    </p>
                    <p className='font-medium'>
                    +123 456 7869
                    </p>
                </div>
            </div>
        </div>


        <div className='lg:w-[60%]'>
            <div className='border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
                <h1 className='text-4xl leading-10 font-semibold text-richblack-5'>
                Got a Idea? We've got the skills. Let's team up
                </h1>
                <p>
                Tell us more about yourself and what you're got in mind.
                </p>

                <div className='mt-7'>
                    <ContactUsForm/>
                </div>
            </div>
        </div>
    </div>

    <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
            <h1 className='text-center text-4xl font-semibold mt-8'>
                Reviews from other learners
            </h1>
    </div>

    <div className='bg-richblack-800'>
    <Footer/>
    </div>
    </>
  )
}

export default Contact_us