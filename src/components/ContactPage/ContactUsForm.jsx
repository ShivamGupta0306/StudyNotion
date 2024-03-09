import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from '../../data/countrycode.json';
import { contactusEndpoint } from "../../services/apis";
import { apiConnector } from "../../services/apiconnector";
import Loader from "../common/Loader"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data", data);
    try{
      setLoading(true);
      const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      // const response = {status:"ok"};
      console.log("Logging response", response);
      setLoading(false);
    } catch(err){
      console.log("Error: ", err.message);
      setLoading(false);
    }
  };



  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
        countrycode:""
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
            {/* firstname */}
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              // value={}
              className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10"
              placeholder="Enter first Name"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>Please enter your name</span>}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            {/* firstname */}
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10"
              placeholder="Enter last Name"
              {...register("lastName")}
            />
          </div>
        </div>


          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10"
              placeholder="Enter email Address"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Please enter email address</span>}
          </div>

          <div className="flex flex-col gap-2">
            
            <label htmlFor="phonenumber">Phone Number</label>

            <div className="flex flex-col gap-2"> 
              <div className="flex gap-5">
                <div className="flex w-[81px] flex-col gap-2">
                <select name="dropdown" className="form-style placeholder-richblack-500 text-white shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-2" id="dropdown" {...register("countrycode", {required: true})}>
                  {
                    CountryCode.map((element, index) =>{
                      return (
                        <option value={element.code} key={index}>
                          {`${element.code} - ${element.country}`} 
                        </option>
                      )
                    })
                  }
                </select>
                </div>
                <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                  <input type="number" id="phonenumber" name="phoneno" className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10" {...register("phoneNo", {required:{value:true, message:"Please enter phone number"},
                  maxLength : {value:10, message:"Invalid phone number"}, 
                  minLength:{value:9, message:"Invalid phone number"}})} placeholder="12345 67890"/>
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="form-style w-full placeholder-richblack-500 text-white tracking-wide shadow-bottom outline-none py-3 rounded-md bg-richblack-700 border-richblack-700 px-3 !pr-10"
              cols="30"
              rows="7"
              placeholder="Enter your message here"
              {...register("message", { required: true })}
            />

            {errors.message && <span>Please enter your message</span>}
          </div>

          <button type="submit" className="rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         transition-all duration-200 hover:scale-95 hover:shadow-none  disabled:bg-richblack-500 sm:text-[16px] ">
            Send Message

          </button>
    </form>
  );
};

export default ContactUsForm;
