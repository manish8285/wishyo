import React from 'react'

const Hero = () => {
  return (
    <div className='w-full container mx-auto my-5'>
        <div className="w-full h-full hero-section bg-black-200 flex items-center">
                <div className="ps-5">
                <h1 className='font-medium text-white font-sans text-2xl'>Get Amazing Cashback on Shopping & Gift Cards</h1>

                <div className='mt-[45px] flex space-x-2'>
                    <button className='rounded py-2 px-4 bg-white color-primary'>GET STARTED</button>
                    <button className='rounded py-2 text-white px-4 border'>HOW IT WORKS?</button>
                    <img className='h-[40px]' src="https://res-5.cloudinary.com/linkisin/image/asset/fl_lossy/gift-boxes-7eba11fd50a6c24c2d3ab0f365e2b880.png" alt="wallet logo" />
                </div>
                </div>
        </div>
    </div>
  )
}

export default Hero