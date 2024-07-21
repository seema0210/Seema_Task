import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FilterProduct from './FilterProduct'
import CardFeature from './CardFeature'

const AllProduct = ({heading}) => {

    const productData = useSelector((state) => state.product.productList)

    const [filterBy, setFilterBy] = useState('')
    const [dataFilter, setDataFilter] = useState([])
  useEffect(()=>{
    setDataFilter(productData)
  },[productData]) // only exicute when add new product

    const handleFilter = (categoryName) => {
        setFilterBy(categoryName)
        const filter = productData.filter((item) => item.category.toLowerCase() === categoryName.toLowerCase())
        setDataFilter(filter)
        console.log('new filter', filter)
      }

    const categoryList = [...new Set(productData.map((i)=>i.category))]
  // Set() --> it store unique value also it is iterable,it is object. '...' use for convert into array form
  console.log('all categories',categoryList)
  return (
    <div>
        <div className='my-5'>
        <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
        <div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
          {
            categoryList && categoryList.map((categoryName) => 
            <FilterProduct
            key={categoryName._id} 
            id={categoryName._id}
            category={categoryName}
            isActive={categoryName.toLowerCase() === filterBy.toLocaleLowerCase()} // get current category
            onClick={()=> handleFilter(categoryName)}
            />)
          }
        </div>
      </div>

      <div className='flex flex-wrap gap-5 justify-center my-4'>
          {
            dataFilter && dataFilter.map((item) => 
            <CardFeature
              key={item._id}
              id={item._id}
              name = {item.name}
              category ={item.category}
              image = {item.image}
              price = {item.price}
            />)
          }
      </div>
    </div>
  )
}

export default AllProduct