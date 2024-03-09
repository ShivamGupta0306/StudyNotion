import React from 'react'

const HighLightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-t text-transparent bg-clip-text from-[#68FDDF] to-[#66A6FF]'>
        {" "}
        {text}
    </span>
  )
}

export default HighLightText