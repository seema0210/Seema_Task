import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../CartProduct'

const Cart = () => {

  const totalProductOnCart = useSelector(state => state.product.cartItem) // get all products from store
  console.log('selected', totalProductOnCart)

  const totalPrice = totalProductOnCart.reduce((pre, curr) => {
    return pre + (+curr.total)
  }, 0)
  const totalQty = totalProductOnCart.reduce((pre, curr) => {
    return pre + (+curr.qty)
  }, 0)
  return (
    <div className=''>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
      {
        totalProductOnCart[0] ?
          <div className='my-4'>
            <div className='w-full max-w-3xl'>
              {
                totalProductOnCart && totalProductOnCart.map((item) =>
                  <CartProduct
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    image={item.image}
                    qty={item.qty} // this fields add in store
                    total={item.total}
                  />)
              }
            </div>
            <div className='w-full max-w-md ml-auto mt-11 absolute top-14 right-5'>
              <h2 className='bg-blue-500 text-white p-2 text-lg'>Summary</h2>
              <div className='flex w-full py-2 text-lg border-b'>
                <p>Total Qty</p>
                <p className='ml-auto w-32 font-bold'>{totalQty}</p>
              </div>
              <div className='flex w-full py-2 text-lg border-b'>
                <p>Total Price</p>
                <p className='ml-auto w-32 font-bold'><span className='text-red-500'>₹</span>{totalPrice} </p>
              </div>
              <button className='bg-red-500 w-full text-lg font-bold py-2 text-white'>Payment</button>
            </div>
          </div>
          :
          <p className='flex justify-center text-slate-500 text-4xl'>Empty</p>
      }
    </div>
  )
}

export default Cart