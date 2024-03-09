import React from 'react'
import { useSelector } from 'react-redux'
import {faCheck} from 'react-icons/fa'
import CourseInformationForm from './CourseInformation/CourseInformation'

const RenderSteps = () => {

    const step = useSelector((state) => state.course);

    const steps = [
        {
            id: 1,
            title: "Course Information",
        },
        {
            id: 2,
            title: "Course Builder",
        },
        {
            id: 3,
            title: "Publish"
        },
    ]

    return (
        <>
            {
                steps.map((item, index) => (
                    <>
                        <div key={index}>
                            <div className= {`${step.step === item.id ? "bg-yellow-900  border-yellow-50 text-yellow-50" : "border-richblack-700 bg-richblack-800 text-richblack-300"}`}>


                                {
                                    step.step > item.id ? (<faCheck />) : (item.id)
                                }
                            </div>
                        </div>
                        {
                            item.id !== steps.length ? (
                                <div className='h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 border-richblack-500 '>
                                </div>
                            ) : (null)
                        }


                    </>
                ))
            }
            <div>
                {steps.map((item) =>{
                    <>
                    <div>
                        <p>{item.title}</p>
                    </div>
                    </>
                })}
            </div>


            {
                step.step === 1 && <CourseInformationForm />
            }
            {/* {
                step === 2 && <CourseBuilderForm/>
            }
            {
                step === 3 && <PublishForm/> */}
            {/* } */}
        </>
    )
}

export default RenderSteps