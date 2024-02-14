import React from 'react'
import SonyGcImage from '../assets/sony-gc-logo.webp'

const GiftCard = ({item}) => {
  return (
    <div className=' rounded gift-card  text-center shadow-sm' style={{backgroundColor:item?.bgcolor}} >
        <div className='text-center pt-5'>
        <img className='max-w-[150px] max-h-[60px] inline' src={item?.logo} alt="" />
        <p className='text-white'>{item?.subHeading}</p>
        </div>
        <hr className='mt-4 gc-border'></hr>
        <div>
            <h2 className='text-white font-medium p-[15px] font-sans'>{item?.heading}</h2>
        </div>
    </div>

  )
}

export default GiftCard