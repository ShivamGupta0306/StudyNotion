import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader';
import OTPInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { GiBackwardTime } from "react-icons/gi";

const VerifyEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading, signupData} = useSelector((state) => state.auth);

    const [otp, setOtp] = useState('');

    // useEffect(() =>{
    //     if(!signupData){
    //         navigate('/signup');
    //     }
    // }, [])

    const handleonSubmit = (e) =>{
        e.preventDefault();
        // console.log(otp);
        const {accountType, firstName, lastName, email, password, confirmPassword} = signupData;
        console.log(accountType, firstName, lastName, email, password, confirmPassword, otp);

        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
        
    }

  return (
    <div className='min-h-[calc(100vh-3.5rem)] grid place-items-center'>
        {
            loading ? (<Loader/>) : (
                <div className='max-w-[500px] p-4 lg:p-8'>
                    <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>Verify Email</h1>
                    <p className='text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100 tracking-wide'>A verification code has been sent to you. Enter the code below</p>
                    <form onSubmit={handleonSubmit}>
                        <div className='otp'>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            placeholder='------'
                            renderInput={(props) => <input {...props}/>}
                            containerStyle={"containerStyle flex"}
                            inputStyle={"inputStyle border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"}
                            
                        />
                        </div>

                        <button className='w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900' type='submit'>Verify Email</button>
                    </form>

                    <div className='mt-6 flex items-center justify-between'>
                        <Link to={'/signup'}>
                            <p className='flex items-center gap-x-2 text-richblack-5 tracking-wide'>
                                <BiArrowBack />
                                Back To Signup</p>
                        </Link>

                        <button onClick={() => dispatch(sendOtp(signupData.email, navigate))}>
                            <p className='flex items-center gap-x-1 text-pink-200 tracking-wide'>
                                <GiBackwardTime size={18}/>
                                Resent it
                            </p>
                        </button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail