import React from 'react'
import CTAButton from "./Button";
import HighLightText from './HighLightText';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
// import bghome from ''
const CodeBlocks = ({position, heading, subheading, ctabtn1, ctabtn2, codeblock, gradientColor, codeColor}) => {
  return (
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>

        <div className='w-[100%] lg:w-[50%] flex flex-col gap-8 tracking-wide'>
            {heading}

            <div className='text-richblack-300 text-base -mt-3 font-bold max-w-[85%]'>
                {subheading}
            </div>

            <div className='flex gap-7 mt-7'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
                    <div className='flex gap-2 items-center'>
                        {ctabtn1.btntext}
                        <FaArrowRight/>
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
                    <div className='flex gap-2 items-center'>
                        {ctabtn2.btntext}
                    </div>
                </CTAButton>
            </div>
        </div>

        <div className='h-fit border-2 border-gradient flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]'>
            <div className={`absolute rounded-full filter blur-[34px] h-[257.05px] left-[calc(50%-263.005px)] opacity-20 top-[calc(50%-175.995px)] transform -skew-x-3 w-[372.95px] bg-gradient-to-br ${gradientColor.from} ${gradientColor.via} ${gradientColor.to}`}>
            </div>

            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>

            <div className={`w-[90%] pr-1 flex flex-col gap-2 font-extrabold font-mono ${codeColor}`}>
                <TypeAnimation
                    sequence={[codeblock, 2000, ""]}
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation = {true}
                    style={
                        {
                            whiteSpace:"pre-line",
                            display:"block",
                            // color:`${codeColor}`
                        }
                    }
                />

            </div>
        </div>

    </div>
  )
}

export default CodeBlocks