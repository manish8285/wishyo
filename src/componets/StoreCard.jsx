import React from 'react'
import Heading from './Heading'

const StoreCard = ({item}) => {
  return (
    <div className='store-card border rounded bg-white shadow-sm '>
        
        <div className="border-top border-2 border-blue-800">
            

        </div>
        <div className='w-full text-center py-2'>
                <img className='inline' src={item?.logo} alt="Store logo" />
                <p>{item?.name}</p>
        </div>
        <div className="border-top border-dashed border"></div>
        <p className='text-center color-primary font-medium text-lg my-2'>{item?.heading}</p>
        </div>
  )
}

export default StoreCard