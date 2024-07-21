import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/Store';

const Header = () => {
    // use for get image of current data
    const userData = useSelector((state) => state.user)
    const productData = useSelector((state) => state.product.cartItem)
    const dispatch = useDispatch()

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    const handleLogout  = () => {
        dispatch(userActions.logout())
        alert('logout successfully')
    }

    return (
        <header className='fixed shadow-md w-full h-17 px-2 md:px-4 relative bg-white'>
            <div className='flex items-center h-full justify-between stiky'>
                <Link to={''}>
                    <div className='h-11'>
                        <img src='https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg' className='h-full' />
                    </div>
                </Link>
                <div className='flex items-center gap-4 md:gap-7 z-50'>
                    <nav className='flex gap-4md md:gap-6 text-base md:text-lg'>
                        <Link to={''}>Home</Link>
                        {/* <Link to={'/menu/'}>Menu</Link> */}
                        {/* <Link to={'about'}>About</Link> */}
                        {/* <Link to={'contact'}>Contact</Link> */}
                    </nav>
                    <Link to={'/cart'}>
                    <div className='text-2xl text-slate-600 relative'>
                        <FaShoppingCart />
                        <div className='absolute -top-1 -right-1  text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>{productData.length}</div>
                    </div>
                    </Link>
                    <div className='text-1xl text-slate-600' onClick={handleShowMenu}>
                        <div className='border-2 border-solid border-slate-600 p-0 rounded-full cursor-pointer w-10 h-10 rponded-full overfolw-hidden drop-shadow-md'>
                            {userData.image ? <img src={userData.image} className='w-full h-full rounded-full' /> : 
                            <div className='w-full h-full flex justify-center items-center'>
                            <FaRegUserCircle />
                             </div>
                            }
                        </div>
                        {
                            showMenu && <div className='absolute right-1 bg-white py-2  shadow drop-shadow-md flex flex-col '>
                                {
                                    userData.email &&  <Link to={'newProduct'} className='whitespace-nowrap cursor-pointer px-2'>New Product</Link>
                                }
                                {
                                    userData.image ? <p className='cursor-pointer text-white bg-red-500 px-2' onClick={handleLogout}>Logout</p> :
                                        <Link to={'login'} className='whitespace-nowrap cursor-pointer px-2'>Login</Link>

                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header