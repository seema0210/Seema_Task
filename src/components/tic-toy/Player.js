import React, { useState } from 'react'

const Player = ({name, symbol}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [data, setData] = useState(name)

    const handleEdit = () => {
        setIsEditing(isEditing => !isEditing) // bcoz it is depend on the previous data.
    }
    const handleName = (e) => {
        setData(e.target.value)
    }
  return (
    <div>
        <div className='flex justify-between w-[10rem]'>
            {
               isEditing ? <input type='text' value={data} onChange={handleName}/>  : <p>{name}</p>
            }
            <p>{symbol}</p>
        </div>
        <button type='button' onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  )
}

export default Player