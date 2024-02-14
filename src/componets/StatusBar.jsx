import React from 'react'
import {HiOutlineUserGroup} from "react-icons/hi"
import {MdCardGiftcard} from "react-icons/md"
import {BsCurrencyRupee} from "react-icons/bs"

const StatusBar = () => {
  return (
    <div className='container mx-auto mt-8 py-12'>
        <div className='flex-col sm:flex sm:flex-row justify-between space-y-[45px] sm:space-y-0 sm:space-x-2'>

            {/* people earning cashback */}

            <div className="mx-5 sm:w-[428px]  bg-blue-200 sm:px-4 rounded text-center">
                    <div className='bg-blue-800 flex justify-center rounded  p-2 animate-changeNumber' style={{margin:"-30px auto"}} >
                        <p className='text-white text-[30px] sm:text-[40px] text-medium' > <HiOutlineUserGroup className='inline' /> <span id="animated-number">1000000</span></p>
                    </div>
                    <div className='pb-3 pt-10'>
                    <h4 className=' text-[20px] text-center'>People Earning Cashback</h4>
                    </div>
            </div>

            {/* Gift Cards SOld */}

            <div className="mx-5 sm:w-[428px]  bg-[#ffdcd7] px-4 rounded text-center">
                    <div className=' bg-[#fe5e49] flex justify-center rounded p-2' style={{margin:"-30px auto"}} >
                        <p className='text-white text-[30px] sm:text-[40px] text-medium' > <MdCardGiftcard color='white' className='inline' /> 12,723,363</p>
                    </div>
                    <div className='pb-3 pt-10'>
                    <h4 className=' text-[20px] text-center'>Gift Cards Sold</h4>
                    </div>
            </div>


            {/* Gift Cards SOld */}

            <div className="mx-5 sm:w-[428px]  bg-[#fe4987] rounded text-center px-4 ">
                    <div className=' bg-[#ffb8d0] flex justify-center rounded p-2' style={{margin:"-30px auto"}} >
                        <p className='text-white text-[30px] sm:text-[40px] text-medium' > <BsCurrencyRupee color='white' className='inline' /> 321,449,363</p>
                    </div>
                    <div className='pb-3 pt-10'>
                    <h4 className=' text-[20px] text-center'>Total Cashback</h4>
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

export default StatusBar