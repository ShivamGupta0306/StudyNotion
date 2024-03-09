import React from 'react'

const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type,
}) => {
  return (
    <button disabled = {disabled} onClick={onClick} type={type} className='flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 undefined'>
        {
            children ? (
                <>
                    <span className='false'>
                        {text}
                    </span> 
                    {children}
                </>
                ) : (text)
        }
    </button>
  )
}

export default IconBtn;