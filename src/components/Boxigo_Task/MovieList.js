import React, { useState } from 'react'
import { FaHouse } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckbox } from "react-icons/io5";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import MoveDetail from './MoveDetail';


const MovieList = ({ movies }) => {
    const [dataVisible, setDataVisible] = useState(false)
    return (
        <>
            <div className='main-home'>
                <div className='from-to'>
                    <div className='pr-[2rem]'>
                        <h3 className='font-bold'>From</h3>
                        <p>{movies.moving_from}</p>
                    </div>
                    <div className='arrow px-[2rem]'><BsArrowRight /></div>
                    <div className='px-[2rem]'>
                        <h3 className='font-bold'>To</h3>
                        <p>{movies.moving_to}</p>
                    </div>
                    <div className='pl-[2rem]'>
                        <h3 className='font-bold'>Request#</h3>
                        <p className='font-bold text-red-500'>{movies.estimate_id}</p>
                    </div>
                </div>
                <div className='icons'>
                    <div className='icon'><p className='text-red-500'><FaHouse /></p><p className='px-1'>{movies.property_size}</p></div>
                    <div className='icon'><p className='text-red-500'><FaBoxes /></p><p className='px-1'>{movies.total_items}</p></div>
                    <div className='icon'><p className='text-red-500'><GiPathDistance /></p><p className='px-1'>{movies.distance}</p></div>
                    <div className='icon'><p className='text-red-500'><TbTruckDelivery /></p><p className='px-1'>{movies.order_date}</p></div>
                    <div>
                        {
                        movies.packing_service === 'No' ? 
                        <div className='icon'> <p><RiCheckboxBlankLine className='text-red-500' /></p> <p className='px-1'>is flexible</p></div> : 
                        <div className='icon'> <p><IoCheckbox className='text-red-500' /></p><p className='px-1'>is flexible</p></div>}
                    </div>
                    <div>
                        <button className='text-red-500 border border-red-500 p-1 rounded mr-2'
                        onClick={() => setDataVisible(true)}>
                            View more details</button>
                        <button className='text-white bg-red-500 p-1 rounded'>
                            Quotes Awaiting</button>
                    </div>
                </div>
                <div className='warn'><p className='text-red-500'><IoIosWarning /></p> <p className='py-1'><span className='font-bold pl-2'>Disclaimer:</span> Please Update your move date before two days shifting</p></div>
            </div>
            {
                dataVisible && <MoveDetail movies = {movies}/>
            }
            <hr className='py-1'/>
        </>
    )
}

export default MovieList