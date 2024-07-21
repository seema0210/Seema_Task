import React, {useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../HomeCard'
import CardFeature from '../CardFeature'
import { TbPlayerTrackPrev,TbPlayerTrackNext } from "react-icons/tb"
import AllProduct from '../AllProduct'

const Home = () => {
  const prodRef = useRef()
  const productData = useSelector((state) => state.product.productList)
  const homeProductCartList = productData.slice(0, 4)
  const productFeatures = productData.filter((item) => item.category === 'vegetable')

  const previousProduct = () => {
    prodRef.current.scrollLeft += 300
  }
  const nextProduct = () => {
    prodRef.current.scrollLeft -= 300
  }

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/71/71422.png' className='h-7' />
          </div>
          <h2 className='text-4xl font-bold md:text-6xl py-3 mt-2'>The Fastest Delivery in <span className='text-red-600 text-'>Your Home</span></h2>
          <p className='py-3 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order Now</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-3 justify-center'>
          {
            homeProductCartList && homeProductCartList.map((item) =>
              <HomeCard
                key={item._id}
                id={item._id}
                name={item.name}
                category={item.category}
                image={item.image}
                price={item.price}
              />)
          }
        </div>
      </div>

      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800'>Fresh Vegetables</h2>
          <div className='ml-auto flex gap-4'>
            <button
             className='bg-slate-300 hover:bg-slate-400 text-lg'
             onClick={previousProduct}
             >
              <TbPlayerTrackPrev />
              </button>
            <button
             className='bg-slate-300 hover:bg-slate-400 text-lg'
             onClick={nextProduct}
             ><TbPlayerTrackNext />
             </button>
          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scroll-smooth transaction-all' ref={prodRef}>
          {
            productFeatures && productFeatures.map((item) =>
              <CardFeature
                key={item._id}
                id = {item._id}
                name={item.name}
                category={item.category}
                image={item.image}
                price={item.price}
              />)
          }
        </div>
      </div>

      <AllProduct heading={'Your Product'}/>
    </div>
  )
}

export default Home