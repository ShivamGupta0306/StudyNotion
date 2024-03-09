import React from 'react'
import { MdPeople } from "react-icons/md";
import { AiOutlineNodeIndex } from "react-icons/ai";

const CourseCard = ({cardData, currentCard, setcurrentCard}) => {
  return (
    <div onClick={() => setcurrentCard(cardData.heading)} className={`w-[360px] lg:w-[30%] ${cardData.heading === currentCard ? 'bg-white shadow-[12px_12px_0_0] shadow-yellow-50  text-richblack-25' : 'w-[360px] lg:w-[30%] bg-richblack-800  text-richblack-25 h-[300px] box-border cursor-pointer' }`}>
        <div className='border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3'>
            <div className={`${cardData.heading === currentCard ? 'text-richblack-800' : 'text-richblack-25'} font-semibold text-[20px] `}>{cardData.heading}</div>
            <div className='text-richblack-400'>{cardData.description}</div>

        </div>

        <div className={`flex justify-between ${cardData.heading === currentCard ? "text-blue-500" : "text-richblack-400"} px-6 py-3 font-medium`}>
            <div className='flex items-center gap-2 text-[16px]'>
                <MdPeople/>
                <p>{cardData.level}</p>
            </div>
            <div className='flex items-center gap-2 text-[16px]'>
                <AiOutlineNodeIndex />
                <p>{`${cardData.lessionNumber} Lesson`}</p>

            </div>
        </div>
        {/* <p>{cardData.heading}</p>
        <p>{cardData.description}</p>
        

        <div>
            <div>
                <MdPeople/>
                <p>{cardData.level}</p>
            </div>

            <div>
                <p>{`${cardData.lessionNumber} Lession`}</p>
            </div>
        </div> */}
    </div>
  )
}

export default CourseCard