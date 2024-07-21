import React, { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi";
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux'
import { userActions } from '../store/Store'

const Login = () => {
  const userData =  useSelector((state) => state)
  const dispatch = useDispatch()

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [data, setData] = useState({
        email : '',
        password : '',
    })
    const handleData = (e) => {
        setData((pre) => {
            return { ...pre, [e.target.name]:e.target.value}
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const { email, password } = data;
        if( email, password ){
            const fetchData = await fetch("http://localhost:9000/login",{
                method : 'POST',
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            const resData = await fetchData.json()
            console.log(resData)
            if(resData.message){
                alert(resData.message)
            } else {
                dispatch(userActions.login(resData))
                setTimeout(() =>{
                    navigate('/')
                }) // when login success then move to 'Home' page. thats why use setTimeOut()
            }
            console.log('data from redux' , userData)

        } else{
            alert('Please enter required fields')
        }
    }

    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU' className='w-full' />
                </div>
                <form className='w-full py-3' onSubmit={handleSubmit}>
                    
                    <label htmlFor='email'>Email</label>
                    <input
                     type='email' 
                     id='email' 
                     name='email' 
                     value={data.email}
                    onChange={handleData}
                     className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' />

                    <label htmlFor='password'>Password</label>
                    <div className=' flex mt-1 mb-2 px-2 py-1 rounded'>
                        <input
                         type={showPassword ? 'text' : 'password'} 
                         id='password'
                          name='password' 
                          value={data.password}
                    onChange={handleData}
                         className='w-full bg-slate-200 border-none outline-1 focus-within:outline-blue-300' />
                        <span className='flex text-xl cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BiShow /> : <BiHide />}</span>
                    </div>

                    <button
                    type='submit'
                     className='w-full max-w-[150px]  bg-gray-500 hover:bg-gary-600 text-white text-xl font-medium text-center py-1 rounded-full mt-4 ml-15'>Login</button>
                </form>
                <p>Don't have Account ? <Link to={'/signup'} className='text-blue-500 underline'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login