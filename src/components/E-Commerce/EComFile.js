import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from './store/Store'

const EComFile = () => {
    const dispatch = useDispatch()

    const productData = useSelector((state) => state.product)  // here latest get data fron store

    useEffect(() => {
        (async () => {
            const fetchData = await fetch('http://localhost:9000/getAllProducts')
            const resData = await fetchData.json()
            console.log(resData)
            dispatch(productActions.setDataProduct(resData))  // here fetch latest data from backend and pass to store
        })()
    }, [])
    console.log(productData)
    return (
        <div>
            <Header />
            <main className='bg-slate-100 min-h-[calc(100vh)]'>
                <Outlet />
            </main>
        </div>
    )
}




export default EComFile