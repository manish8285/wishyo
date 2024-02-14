import React from 'react'

const Heading = ({text}) => {
  return (
    <div className=' w-full text-center items-center'>
        <h1 className='text-[25px] font-medium font-sans' >{text}</h1>
        <hr className='heading-underline inline-block' /> 
        
    
    </div>
  )
}

export default Heading