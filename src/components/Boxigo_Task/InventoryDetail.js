import React from 'react'

const InventoryDetail = ({ movies, currentCategory }) => {
    console.log('rrr', movies);

    return (
        <div>
            {
                currentCategory && movies?.map((item) => (
                    currentCategory === item?.name && <div key={item.id} className='category'>
                        {
                            item?.category && item?.category?.map((i) => (
                                <div key={i.id} className='' >
                                    <h1 className='pb-2'>{i.displayName}</h1>
                                    {
                                       i?.items &&  i?.items?.map((feature) => (
                                        <div key={feature.id} className='feature'>
                                            <p>{feature.displayName}</p>
                                        </div>
                                       ))
                                    }
                                </div>
                            ))
                        }
                    </div>

                ))
            }
        </div>
    )
}

export default InventoryDetail