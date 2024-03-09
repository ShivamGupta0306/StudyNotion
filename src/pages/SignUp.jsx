import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Frame from "../assets/Images/frame.png";
import { useNavigate } from "react-router-dom";
import Students from "../assets/Images/signup.webp";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp } from "../services/operations/authAPI";
import { setSignupData } from "../slices/authSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("Student");
  const [eye, setShoweye] = useState(true);
  const [othereye, setOthereye] = useState(true);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  // const {setSignupData} = useSelector((state) => state.auth);

  const handleChange = (e) =>{
    const { name, value } = e.target;
    
  // If the field name is 'email', ensure the value is a string
  const updatedValue = name === 'email' ? value.toString() : value;
  
  setFormData({
    ...formData,
    [name]: updatedValue,
  });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    dispatch(sendOtp(formData.email, navigate));
    dispatch(setSignupData({...formData, accountType: currentTab}));
    
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center tracking-wide">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Join the millions learning to code with StudyNotion for free
          </h1>
          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">
              Build skills for today, tomorrow, and beyond.
            </span>
            <br />
            <span className="font-edu-sa text-sm font-bold italic text-blue-100">
              Education to future-proof your career.
            </span>
          </p>

          <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max " style={{boxShadow:'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}>
              <button
                onClick={() => setCurrentTab("Student")}
                className={`${
                  currentTab === "Student"
                    ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent"
                } text-richblack-200 py-2 px-5 rounded-full transition-all duration-200`}
              >
                Student
              </button>
              <button
                onClick={() => setCurrentTab("Instructor")}
                className={`${
                  currentTab === "Instructor"
                    ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent"
                } text-richblack-200 py-2 px-5 rounded-full transition-all duration-200`}
              >
                Instructor
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-y-4">
              <div className="flex gap-x-4">
                <label htmlFor="">
                  <p className="mb-1 text-[0.875rem] tracking-wide leading-[1.375rem] text-richblack-5">
                    First Name 
                    <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    type="text"
                    required
                    className="form-style placeholder-richblack-500 text-white tracking-wide outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 w-full shadow-bottom"
                    name="firstName"
                    placeholder="Enter first name"
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="">
                  <p className="mb-1 text-[0.875rem] tracking-wide leading-[1.375rem] text-richblack-5">
                    Last Name
                    <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    type="text"
                    required
                    className="form-style placeholder-richblack-500 text-white tracking-wide outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 w-full shadow-bottom"
                    name="lastName"
                    placeholder="Enter last name"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label className="w-full">
                <p className="mb-1 text-[0.875rem] tracking-wide  leading-[1.375rem] text-richblack-5">
                  Email Address
                  <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type="text"
                  required
                  className="form-style placeholder-richblack-500 text-white tracking-wide outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 w-full shadow-bottom"
                  name="email"
                  placeholder="Enter email address"
                  onChange={handleChange}
                />
              </label>

              <div className="flex gap-x-4">
                <label className="relative">
                  <p className="mb-1 text-[0.875rem] tracking-wide  leading-[1.375rem] text-richblack-5">
                    Create Password
                    <sup className="text-pink-200">*</sup>
                  </p>

                  <input
                    type={`${eye ? "Password" : "text"}`}
                    name="password"
                    placeholder="Enter Password"
                    className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10"
                    id="password"
                    onChange={handleChange}
                  />
                  <span
                    onClick={() => setShoweye(!eye)}
                    className="absolute  text-richblack-100 right-4 top-[38px] z-[10] cursor-pointer"
                  >
                    {eye ? (
                      <IoEyeOutline size={24} />
                    ) : (
                      <IoEyeOffOutline size={24} />
                    )}
                  </span>
                </label>

                <label className="relative">
                  <p className="mb-1 text-[0.875rem] tracking-wide  leading-[1.375rem] text-richblack-5">
                    Confirm Password
                    <sup className="text-pink-200">*</sup>
                  </p>

                  <input
                    type={`${othereye ? "Password" : "text"}`}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10"
                    id="confirmpassword"
                    onChange={handleChange}
                  />
                  <span
                    onClick={() => setOthereye(!othereye)}
                    className="absolute  text-richblack-100 right-4 top-[38px] z-[10] cursor-pointer"
                  >
                    {othereye ? (
                      <IoEyeOutline size={24} />
                    ) : (
                      <IoEyeOffOutline size={24} />
                    )}
                  </span>
                </label>
              </div>

              <button
                className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>

        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
          <img
            src={Frame}
            width={558}
            height={504}
            loading="lazy"
            alt="Pattern"
          />
          <img
            src={Students}
            className="absolute -top-4 right-4 z-10"
            loading="lazy"
            width={558}
            height={504}
            alt="Students"
          />
        </div>
      </div>
      <div className="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div>
    </div>
  );
};

export default SignUp;
