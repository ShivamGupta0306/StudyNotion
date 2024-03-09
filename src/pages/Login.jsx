import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Frame from '../assets/Images/frame.png';
import Students from '../assets/Images/login.webp';
import { apiConnector } from '../services/apiconnector';
import { endpoints } from '../services/apis';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../services/operations/authAPI';

const Login = () => {
    const [eye, setShowEye] = useState(true);
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

       dispatch(login(formData.email, formData.password, navigate));
    }

    return (
        <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
            <div className='mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12'>

                <div className='mx-auto w-11/12 max-w-[450px] md:mx-0'>
                    <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>Welcome Back</h1>
                    <p className='mt-4 text-[1.125rem] leading-[1.625rem]'>
                        <span className='text-richblack-100'>Build skills for today, tomorrow, and beyond.</span>
                        <br />
                        <span className='font-edu-sa text-sm tracking-wide font-bold italic text-blue-100'>Education to future-proof your career.</span>
                    </p>

                    <form className='mt-6 flex w-full flex-col gap-y-4' onSubmit={handleSubmit}>
                        <label htmlFor="email" className='w-full'>
                            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Email Address<sup className='text-pink-200'>*</sup></p> 
                            <input 
                                type="text" 
                                required 
                                name="email" 
                                placeholder='Enter email address' 
                                id="email" 
                                className='form-style placeholder-richblack-500 text-white tracking-wide outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 w-full shadow-bottom'
                                onChange={handleChange}
                            />
                        </label>

                        <label htmlFor="password" className='relative'>
                            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>
                                Password
                                <sup className='text-pink-200'>*</sup>
                            </p>
                            <input 
                                type={`${eye ? 'password' : 'text'}`} 
                                name="password" 
                                placeholder='Enter Password' 
                                className='form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10' 
                                id="password" 
                                onChange={handleChange}
                            />

                            <span onClick={() => setShowEye(!eye)} className='absolute text-richblack-100 right-4 top-[38px] z-[10] cursor-pointer'>
                                {eye ? <IoEyeOutline size={24} /> : <IoEyeOffOutline size={24}/>}
                            </span>

                            <Link to={'/forgot-password'}>
                                <p className='mt-2 ml-auto max-w-max text-xs text-blue-100'>Forgot Password</p>
                            </Link>
                        </label>

                        <button type="submit" className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900'>Sign In</button>
                    </form>

                </div>

                <div className='relative mx-auto w-11/12 max-w-[450px] md:mx-0'>
                    <img src={Frame} loading='lazy' width={558} height={504} alt="" />
                    <img src={Students} loading='lazy' className='absolute -top-4 right-4 z-10' alt="" />
                </div>

                <div className='position: fixed z-index: 9999 inset: 16px pointer-events: none'></div>

            </div>

        </div>
    );
}

export default Login;
