// when click on product then disply this product in detail.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../AllProduct'
import { productActions } from '../store/Store'

const Menu = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productData = useSelector(state => state.product.productList)
  console.log(productData)

  const displayProduct = productData.filter((i)=> i._id === id)[0]
  console.log('current prod', displayProduct)

  const handleAddCart = (e) => {
    dispatch(productActions.addCartItem(displayProduct))
    // pass the menu item to the store
}
  return (
    <div className='p-3 w-70 md:p-4  m-auto'>
      <div className='w-full max-w-4l m-auto md:flex bg-white justify-center h-80'>
        <div className='max-w-lg overflow-hidden'>
          <img src={displayProduct.image} className='hover:scale-105 transmition-all h-full p-5'/>
        </div>
        <div className='flex flex-col gap-2'>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-2xl md:text-4xl pt-8'>{displayProduct.name}</h3>
        <p className='text-center text-slate-500 font-medium text-2xl'>{displayProduct.category}</p>
        <p className='text-center font-bold text-2xl'><span className='text-red-500'>₹</span><span>{displayProduct.price}</span></p>
        <div className='flex gap-3 ml-3'>
        <button className='bg-yellow-500 py-1 w-full rounded cursor-pointer hover:bg-yellow-600 min-w-[100px]'>Buy</button>
        <button 
        className='bg-yellow-500 py-1 w-full rounded cursor-pointer hover:bg-yellow-600 min-w-[100px]'
        onClick={handleAddCart}
        >Add Cart</button>
        </div>
        <div className='ml-3'>
          <p className='text-slate-600 font-medium'>Description :</p>
          <p>{displayProduct.description}</p>
        </div>
        </div>
      </div>
      <AllProduct heading={'Related Product'}/>
    </div>
  )
}

export default Menu