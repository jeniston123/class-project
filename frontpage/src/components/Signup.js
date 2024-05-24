import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate=useNavigate()

    const handlesignup=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:3001/users/signup`,{
        username,email,password
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
      navigate('/login')
      
    }

  return (
    <div>
      <img  className='sgimg'src='https://hindhusthaan.in/wp-content/uploads/2019/03/maxresdefault-1024x576.jpg'style={{height:"200%",width:"100%"}}></img>
        <form  className='sgform'onSubmit={handlesignup}>
            <label>Name</label><br/>
            <input type='text' value={username} onChange={(e)=>{setUserName(e.target.value)}}/><br/>
            <label>Email</label><br/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type='submit'>Sign up</button>

        </form>
    </div>
  )
}