import React, { useState } from 'react'
import { BiHide, BiShow } from "react-icons/bi";
import { Link,useNavigate } from 'react-router-dom';
import { ImageToBase } from '../utility/ImageToBase';

const Signup = () => {
    const signupImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU';
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)

    const [data, setData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : '',
        image : ''
    })
    const handleData = (e) => {
        setData((pre) => {
            return { ...pre, [e.target.name]:e.target.value}
        })
    }

    const handleUploadProfileImage = async(e) => {
        const data = await ImageToBase(e.target.files[0])

        setData((pre) => {
            return { ...pre, image : data}
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const { firstName,lastName, email, password,confirmPassword,image } = data
        if( firstName,lastName,email,password,confirmPassword,image){
            if(password === confirmPassword){
                const fetchData = await fetch("http://localhost:9000/signup", {
                    method : 'POST',
                    headers : {
                        "Content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                })
                const dataRes = await fetchData.json()
                console.log(dataRes)
                alert('Successfully')
                navigate('/login')
                
            } else{
                alert("password and confirmPassword not equal")
            }
        } else{
            alert('Please enter rewuired fields')
        }
        console.log(firstName,lastName,email,password,confirmPassword)
    }

    return (
        <div className='p-3 md:p-4'>
            <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
                <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative'>
                    <img src={data.image ? data.image : signupImage} className='w-full h-full' />

                    {/* we can get image from any folder */}
                    <label htmlFor='profileImage'>
                        <div className='absolute bottom-0 h-1/4 bg-slate-500 bg-opacity-40 w-full text-center cursor-pointer'>
                            <p className='text-sm pb-1 text-white'>Upload</p>
                        </div>
                        <input type='file' id='profileImage' className='hidden' accept='image/*' onClick={handleUploadProfileImage}/>
                    </label>
                </div>
                <form className='w-full py-3' onSubmit={handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                    type='text' 
                    id='firstName' 
                    name='firstName' 
                    value={data.firstName}
                    onChange={handleData}
                    className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' />

                    <label htmlFor='lastName'>Last Name</label>
                    <input 
                    type='text'
                     id='lastName'
                      name='lastName' 
                      value={data.lastName}
                    onChange={handleData}
                      className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' />

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

                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <div className=' flex mt-1 mb-2 px-2 py-1 rounded'>
                        <input 
                        type={confirmPassword ? 'text' : 'password'}
                         id='confirmPassword'
                          name='confirmPassword'
                          value={data.confirmPassword}
                    onChange={handleData}
                          className='w-full bg-slate-200 border-none outline-1 focus-within:outline-blue-300' />
                        <span className='flex text-xl cursor-pointer' onClick={() => setConfirmPassword(!confirmPassword)}>{confirmPassword ? <BiShow /> : <BiHide />}</span>
                    </div>

                    <button
                    type='submit'
                     className='w-full max-w-[150px]  bg-gray-500 hover:bg-gary-600 text-white text-xl font-medium text-center py-1 rounded-full mt-4 ml-15'>Signup</button>
                </form>
                <p>Already have Account ? <Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup