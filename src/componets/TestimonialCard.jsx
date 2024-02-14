import React from 'react'
import QuoteIcon from '../assets/quote.png'
import Uttam from '../assets/uttam.webp'

const TestimonialCard = ({item}) => {
  return (
    <div className='border shadow-sm'>
        <div className='p-2 brd-tm'>
            <img width={41} height={40} src={QuoteIcon} alt="Quote Icon" />
        </div>
        <p className='min-h-[130px] px-7'>{item.text}</p>
        <div className='flex justify-between items-center  p-5 bg-[#ececec]'>
            <h1 className='font-medium sans-serif text-[16px]'>{item?.name}</h1>
            <div className='h-[60px] w-[60px] rounded-full border border-white border-4 bg-white mt-[-50px] flex items-center justify-between'>
                <img src={item?.pic} alt="profile" />
            </div>

        </div>
    </div>
  )
}

export default TestimonialCard