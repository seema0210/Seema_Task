
import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImageToBase } from '../utility/ImageToBase'

const NewProduct = () => {
  const [data, setData] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    description: ''
  })

  const handleChange = (e) => {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
  }

  const uploadImage = async (e) => {
    const data = await ImageToBase(e.target.files[0])
    setData((pre) => {
      return { ...pre, image: data }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, category, image, description, price } = data

    try{

    if (name, category, image, description, price) {
      const fetchData = await fetch('http://localhost:9000/addProduct', {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ name, category, image, description, price })
      })
      const resData = await fetchData.json()
      console.log(resData)
      alert('Add successfully')
    } else {
      console.log('not add product')
    }
  } catch(err){
    console.log( 'error for post api',err)
  }
    console.log(name, category, image, description, price)

    setData(() => {
      return {
        name: '',
        category: '',
        image: '',
        price: '',
        description: ''
      }
    })
  }

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit}
        className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' >

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='bg-slate-100 m-1 p-1'
          onChange={handleChange}
          value={data.name}
        />

        <label htmlFor='category'>Category</label>
        <select
          className='bg-slate-100 m-1 p-1'
          onChange={handleChange}
          id='category'
          name='category'
          value={data.category}
        >
          <option value={'other'}>Select Category</option>
          <option value={'fruits'}>Fruits</option>
          <option value={'vegetable'}>Vegetable</option>
          <option value={'icecream'}>Icecream</option>
          <option value={'dosa'}>Dosa </option>
          <option value={'pizza'}>Pizza</option>
          <option value={'rice'}>Rice</option>
          <option value={'burger'}>Burger</option>
          <option value={'panner'}>Panner</option>
          <option value={'sandwich'}>Sandwich</option>
        </select>

        <label htmlFor='image'>Image
          <div
            className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ?
                <img src={data.image} className='h-full' /> :
                <span
                  className='text-5xl'>
                  <IoCloudUploadOutline />
                </span>
            }
            <input
              type={'file'}
              accept='image/*'
              id='image'
              onChange={uploadImage}
              className='hidden'
              name='image'
            />
          </div>
        </label>

        <label htmlFor='price'>Price</label>
        <input
          type='text'
          name='price'
          id='price'
          className='bg-slate-100 m-1 p-1 my-1'
          onChange={handleChange}
          value={data.price}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          rows={3}
          id='description'
          name='description'
          className='bg-slate-100 m-1 p-1 my-1 resize-none'
          onChange={handleChange}
          value={data.description}
        />

        <button
          type='submit'
          className='bg-red-500 hover:bg-red-600 text-white text-1g font-medium drop-shadow my-2 rounded'>
          Save
        </button>
      </form>
    </div>
  )
}

export default NewProduct