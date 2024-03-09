import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseCategories } from '../../../../../services/operations/courseDetailsAPI';
import {HiOutlineCurrencyRupee} from 'react-icons/hi'
import ChipInput from './ChipInput';
import Upload from '../Upload';

export default function CourseInformationForm() {

  const {
    register,
    handleSubmit,
    setValue,
    getValue,
    formState:{errors},
  } = useForm();

  const dispatch = useDispatch();

  const {course, editCourse} = useSelector((state) => state.course);

  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() =>{
    const getCategories = async() =>{
      setLoading(true);
      const categories = await fetchCourseCategories();
      if(categories.length > 0){
        setCourseCategories(categories);
      }
      setLoading(false);
    }

    if(editCourse){
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }

    getCategories();
  }, []); 

  const onSubmit = async(data) =>{
    
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-8'>
      <div>
        <label htmlFor='courseTitle'>Course Title <sup>*</sup></label>
        <input type="text" id='courseTitle' placeholder='Enter Course Title' {...register("courseTitle", {required:true})} className='w-full' />
        {
          errors.courseTitle && (
            <span>Course Title is Required**</span>
          )
        }
      </div>

      <div>
        <label htmlFor='courseShortDesc'>Course Short Description</label>
        <textarea id="courseShortDesc" placeholder='Enter Description' {...register("courseShortDesc", {required:true})} cols="30" rows="10" className='min-h-[140px] w-full'/>
        {
          errors.courseShortDesc && (
            <span>Course Description is Required**</span>
          )
        }
      </div>

      <div className='relative'>
        <label htmlFor='coursePrice'>Course Price</label>
        <input id="coursePrice" placeholder='Enter Course Price' {...register("coursePrice", {required:true, valueAsNumber:true})} cols="30" rows="10" className='form-style w-full !pl-12'/>
        <HiOutlineCurrencyRupee className='absolute left-3 top-3/4 inline-block -translate-y-1/2 text-2xl text-richblack-400'/>
        {
          errors.coursePrice && (
            <span>Course Price is Required**</span>
          )
        }
      </div>

      <div>
        <label htmlFor='courseCategory'>Course Category <sup>*</sup></label>
        <select id="courseCategory" defaultValue={""} {...register("courseCategory", {required:true})}>
          <option value={""} disabled>Choose a Category</option>
          {
            !loading && courseCategories.map((category, index) => (
              <option key={index} value={category?.id}>{category?.name}</option>
            ))
          }
        </select>
        {
          errors.courseCategory && (
            <span>
              Course Category is Required**
            </span> 
          )
        }
      </div>

      {/* //create a custom component for handling tags input */}
      <ChipInput label="Tags" name = "courseTags" placeholder="Enter tags and press enter" register={register} errors = {errors} setValue={setValue} getValue = {getValue}/>

      {/* Course Thumbnail Image */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />



    </form>
  )
}
