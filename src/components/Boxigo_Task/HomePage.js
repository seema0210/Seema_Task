import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'

const HomePage = () => {

    const [data, setData] = useState([])

    const getMovie = async () => {
        const response = await axios(`http://test.api.boxigo.in/sample-data/`)
        const res = response.data.Customer_Estimate_Flow;
        return res;
    }
    useEffect(() => {
        getMovie().then((val) => setData(val))
    },[])
    console.log('fetch data', data)
  return (
    <div className='homepage'>
        <h1 className='font-bold text-xl'>My Moves</h1>
        {
            data && data.map((item) => (
                <div key={item.estimate_id}>
                    <MovieList movies = { item } />
                </div>
            ))
        }
    </div>
  )
}

export default HomePage