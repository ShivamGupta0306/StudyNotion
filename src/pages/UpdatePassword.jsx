import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader';
import { resetPassword } from '../services/operations/authAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const UpdatePassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        password:"",
        confirmPassword: "",
    })
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPass, setshowConfirmPass] = useState(false);

    const handleChange = (e) =>{
        setformData((prevData) =>({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }
    const {password, confirmPassword} = formData;

    const handleonSubmit = (e) =>{
        e.preventDefault();
        const token = location.pathname.split('/').pop();
        console.log(token)
        dispatch(resetPassword(password, confirmPassword, token, navigate));
    }
  return (
    <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
        {
            loading ? (<Loader/>) : (
                <div className='max-w-[500px] p-4 lg:p-8'>
                    <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>Choose new Password</h1>
                    <p className='my-4 text-[1.125rem] leading-[1.625rem] tracking-wide text-richblack-100'>Almost done. Enter your new password and you're all set.</p>
                    <form onSubmit={handleonSubmit}>
                        <label className='relative'>
                            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>New Password<sup className='text-pink-200'>  *</sup></p>
                            <input name='password' className='form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 ' type={`${showPassword ? 'text' : 'password'}`} required value={formData.password} onChange={handleChange} placeholder='Enter Password' />
                            <span className='absolute right-3 top-[38px] z-[10] cursor-pointer text-richblack-100' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? (<IoEyeOutline size={23}/>) : (<IoEyeOffOutline size={23}/>)
                                }
                            </span>
                        </label>

                        <label className='relative mt-3 block'>
                            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Confirm New Password<sup className='text-pink-200'>  *</sup></p>  
                            <input name='confirmPassword' className='form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10' type={`${showconfirmPass ? 'text' : 'password'}`} required value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' />
                            <span className='absolute right-3 top-[38px] z-[10] cursor-pointer text-richblack-100' onClick={() => setshowConfirmPass(!showconfirmPass)}>
                                {
                                    showconfirmPass ? (<IoEyeOutline size={23}/>) : (<IoEyeOffOutline size={23}/>)
                                }
                            </span>
                        </label>

                        <button className='mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900' type="submit">Reset Password</button>
                    </form>
                    <div className='mt-6 flex items-center justify-between'>
                        <Link to={'/login'}>
                            <p className='flex items-center gap-x-2 text-richblack-5'>
                                <BiArrowBack />
                                Back to Login</p>
                        </Link>
                    </div>

                    <div className='position: fixed; z-index: 9999; inset: 16px; pointer-events: none;'></div>
                </div>
            )
        }
    </div>
  )
}

export default UpdatePassword