import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import InventoryDetail from './InventoryDetail';
const MoveDetail = ({movies}) => {
    const [open, setOpen] = useState({})
    const [currentCategory, setCurrentCategory] = useState([]);

    const toggleOpen = (id, category) => {
        setOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
        setCurrentCategory(category);
    };

    return (
        <div>
            <div>
                <div className='warn py-2'>
                    <h1 className='font-bold'>Inventory Details</h1>
                    <button type='button' className='btn'>Edit Inventory</button>
                </div>
                {
                    movies.items.inventory && movies.items.inventory.map((invent) => (
                        <div key={invent.id} onClick={() => toggleOpen(invent.id)}>
                            <div className='invent'>
                            <h2 className='text-red-500'>{invent.displayName} <span className='length'>{invent.category.length}</span></h2>
                            <p>{ open[invent.id] ? <IoIosArrowDown/> : <IoIosArrowUp/>}</p>
                            </div>
                            {
                                open[invent.id] && <InventoryDetail movies={movies.items.inventory} currentCategory={invent.name}/>
                            }
                        </div>
                    ))
                }
            </div>
            <div>
                <div className='warn py-2'>
                    <h1 className='font-bold'>House Details</h1>
                    <button type='button' className='btn'>Edit House Details</button>
                </div>
                <div>
                    <div className='py-3'>
                        <h1 className='font-bold text-red-500 py-1'>Existing House Details</h1>
                        <div className='basic-info'>
                            <div>
                                <h2 className='font-bold'>Location</h2>
                                <p>{movies.from_address.fromAddress}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>City</h2>
                                <p>{movies.from_address.fromCity}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>State</h2>
                                <p>{movies.from_address.fromState}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>Pincode</h2>
                                <p>{movies.from_address.pincode}</p>
                            </div>
                        </div>
                        <h2 className='font-bold pt-1'>Additional Information</h2>
                        <p>No additional info</p>
                    </div>
                    <hr/>
                    <div>
                    <div className='py-3'>
                        <h1 className='font-bold text-red-500 py-1'>New House Details</h1>
                        <div className='basic-info'>
                            <div>
                                <h2 className='font-bold'>Location</h2>
                                <p>{movies.to_address.toAddress}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>City</h2>
                                <p>{movies.to_address.toCity}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>State</h2>
                                <p>{movies.to_address.toState}</p>
                            </div>
                            <div>
                                <h2 className='font-bold'>Pincode</h2>
                                <p>{movies.to_address.pincode}</p>
                            </div>
                        </div>
                        <h2 className='font-bold pt-2'>Additional Information</h2>
                        <p>No additional info</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoveDetail