// create saperate stucture of product
// click on product button then add this product to the store
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productActions } from './store/Store'

const CardFeature = ({ name, category, price, image, id }) => {
    const dispatch = useDispatch()
    const handleAddCart = (e) => {
        dispatch(productActions.addCartItem({
            _id : id,
            name : name,
            price : price,
            category : category,
            image : image
        })) // pass the new item to the store
    }
    return (
        <div className='bg-white shadow-md max-w-[200px] rounded juctify-center m-4'>
            <div className=''>
                <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: '0', behavior: 'smooth' })}>
                    {/* when click on any product then move to menu comp with given id, this id pass to 'EComMainFile.js also forword to menu.js file and accept this id using useParams()' */}
                    {/* use onClock for when click on any product then move screen top side */}
                    <div className='w-40 min-h-[150px] h-20'>
                        <img src={image} className='h-full w-full' />
                    </div>
                    <h3 className='font-semibold text-slate-600 text-center capitalize text-lg '>{name}</h3>
                    <p className='text-center text-slate-500 font-medium'>{category}</p>
                    <p className='text-center font-bold'><span className='text-red-500'>₹</span><span>{price}</span></p>
                </Link>
            </div>
            <button
                className='bg-yellow-500 py-1 w-full rounded cursor-pointer hover:bg-yellow-600'
                onClick={handleAddCart}
            >Add Cart</button>
        </div >
    )
}

export default CardFeature