import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({name,category, image, price, id}) => {
  return (
    <div className='bg-white shadow-md p-2 rounded'>
      {
        name ? (
          <Link to={`/menu/${id}`}>
          <div className='w-40 min-h-[150px] h-20'>
            <img src={image} className='h-full w-full'/>
        </div>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
        <p className='text-center text-slate-500 font-medium'>{category}</p>
        <p className='text-center font-bold'><span className='text-red-500'>₹</span><span>{price}</span></p>
          </Link>
        ) : 
        <p>Loading...</p>
      }

    </div>
  )
}

export default HomeCard