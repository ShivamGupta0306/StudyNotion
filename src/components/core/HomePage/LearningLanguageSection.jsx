import React from 'react'
import HighLightText from './HighLightText'
import CTAButton from './Button';
import img1 from '../../../assets/Images/Compare_with_others.png'
import img2 from '../../../assets/Images/Know_your_progress.png';
import img3 from '../../../assets/Images/Plan_your_lessons.png';

const LearningLanguageSection = () => {
  return (
    <div>
        <div className='flex flex-col gap-3 items-center my-10'>
            <div className='text-4xl text-center font-bold'>
                Your swiss knife for <HighLightText text={"learning any language"}/>
            </div>

            <div className='text-center text-richblack-700 font-medium lg:w-[80%] mx-auto leading-6 text-base'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
                <img className='object-contain  lg:-mr-32 ' src={img2} alt="" />
                <img  className = 'object-contain lg:-mb-10 lg:-mt-0 -mt-12' src={img1} alt="" />
                <img  className = 'object-contain  lg:-ml-36 lg:-mt-5 -mt-16' src={img3} alt="" />
            </div>

            <div className='my-10'>
                <CTAButton active={true} linkto={'/signup'}>Learn more </CTAButton>
            </div>

        </div>
    </div>
  )
}

export default LearningLanguageSection