import React, { useEffect, useState } from 'react'

const ApiInt = () => {

  const [input, setInput] = useState({
    name: '',
    email: ''
  })
  const [userData, setUserDate] = useState([])
  const fetchUssers = async () => {
    const res = await fetch(`http://localhost:8000/api/getUsers`)
    const response = res.json()
    return response;
  }
  useEffect(() => {
    fetchUssers().then((data) => setUserDate(data))
  }, [])

  const handleChange = (e) => {
    setInput((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }
  const addData = async (e) => {
    e.preventDefault()
    const { name, email } = input
    const res = await fetch(`http://localhost:8000/api/signup`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(input),
    })
    const response = await res.json()
    console.log('new data', response)
  }

  const deleteUser = async(id) => {
    console.log('my id',id)
    const res = await fetch(`http://localhost:8000/api/${id}`, {
      method : 'DELETE',
      headers: {
        'Content-Type' : 'application/jso'
      }
    })
    console.log(res);
  }
  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={addData}>
        <input type="text" placeholder='Enter name' name='name' value={input.name} onChange={handleChange} /><br />
        <input type="email" placeholder='Enter email' name='email' value={input.email} onChange={handleChange} /><br />
        <button type='submit'>Add</button>
      </form>
      <h1>CRUD OPERATION</h1>
      {
        userData && userData?.map((item) => (
          <div key={item._id}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <button type='submit' onClick={()=>deleteUser(item._id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default ApiInt