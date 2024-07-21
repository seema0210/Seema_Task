// product display on cart
import React from 'react'
import { useDispatch } from 'react-redux'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { MdDelete } from "react-icons/md"
import { productActions } from './store/Store'

const CartProduct = ({ id, name, price, category, image, total, qty }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        setTimeout(() => {
            dispatch(productActions.deleteCartItem(id))

        })
    }
    const increaseProd = () => {
        dispatch(productActions.increaseQty(id))
    }
    const decreaseProd = () => {
        dispatch(productActions.dereaseQty(id))
    }
    return (
            <div className='bg-slate-200 p-2 flex gap-4 rounded border-slate-300 border-2'>
                <div className='p-3 bg-white rounded overflow-hidden'>
                    <img src={image} className='h-29 w-40 object-cover' />
                </div>
                <div className='flex flex-col gap-2 w-6 justify-center'>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold text-slate-600 text-center capitalize text-lg md:text-xl pt-1'>{name}</h3>
                        <p className='text-center text-slate-500 font-medium'>{category}</p>
                        <p className='text-center font-bold text-base'><span className='text-red-500'>₹</span><span>{price}</span></p>
                    </div>
                    <div className='flex justify-between w-full '>
                        <div className='flex gap-3 ml-1 items-center mr-9 pr-9'>
                            <button
                                onClick={increaseProd}
                                className='bg-slate-300 py-1 w-6 rounded cursor-pointer hover:bg-slate-400 p-1'>
                                <FaPlus />
                            </button>
                            <p className='font-semibold p-1'>{qty}</p>
                            <button
                                onClick={decreaseProd}
                                className='bg-slate-300 py-1 w-6 rounded cursor-pointer hover:bg-slate-400 p-1'>
                                <FaMinus />
                            </button>
                        </div>
                        <div className='flex gap-2 font-bold text-slate-700  pl-9 ml-11'>
                            <p className=' ml-9 pl-9'>Total </p>
                            <p className='bg-slate-400 p-1 rounded'><span className='text-red-500'>₹</span>{total}</p>
                            <p className='flex items-center text-2xl ml-6 pl-6 cursor-pointer hover:text-red-500'
                                onClick={handleDelete}
                            ><MdDelete /></p>
                        </div>
                    </div>
                </div>
            </div>

            
    )
}

export default CartProduct