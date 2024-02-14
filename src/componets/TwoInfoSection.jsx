import React from 'react'
import Heading from './Heading'

const TwoInfoSection = () => {
  return (
    <div className='container mx-auto mt-8 py-8'>
        <Heading text={"It's your cash, take it back!"} />
        <div className="space-y-3 sm:space-y-0 px sm:flex sm:space-x-5 mt-8">
        <div className='flex-1 sm:border sm:shadow-sm rounded p-5 sm:bg-white'>
            <div className="text-center sm:text-left sm:flex sm:space-x-8 items-center">
                <div className='text-center'>
                    <img className='inline' src="https://res-4.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_120,q_auto,w_120/cashback-4ebdc2e7ccf1435e32a14f297fe48b31.png" alt="" />
                </div>
                <div className='font-medium flex-col space-y-5'>
                    <h2 className='text-[20px] sans-serif font-medium color-primary' >Earn Cashback</h2>
                    <p>Shop online, buy giftcards or sell unused Gift Cards to earn ZingCash</p>
                </div>
            </div>
        </div>
        <div className='flex-1 sm:border sm:shadow-sm rounded p-5 sm:bg-white'>
            <div className="text-center sm:text-left sm:flex sm:space-x-8 items-center">
                <div className='text-center'>
                    <img className='inline' src="https://res-1.cloudinary.com/linkisin/image/asset/c_scale,f_auto,fl_lossy,h_120,q_auto,w_120/paid-1e9d6914927037a5924d7915c3e4b22f.png" alt="" />
                </div>
                <div className=' flex-col space-y-5'>
                    <h2 className='text-[20px] color-primary font-medium'>Earn Cashback</h2>
                    <p>Shop online, buy giftcards or sell unused Gift Cards to earn ZingCash</p>
                </div>
            </div>
        </div>
        </div>
        <div className='text-center p-10'>
            <button className='bg-secondary text-white px-5 py-2 rounded'>
                SIGNUP NOW
            </button>
        </div>
    </div>
  )
}

export default TwoInfoSection