import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'
export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const[data,setData]=useState([])
    const navigate=useNavigate()
    const emailref=useRef()
    const auth=useAuth()
    
    

    useEffect(()=>{
      axios.get('http://localhost:3001/users/get')
      .then(res=>{setData(res.data);console.log(res.data)})
      .catch(err=>console.log(err))
    },[])

    const handlesignin=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:3001/users/signin`,{email,password})
      .then(res=>{console.log(res.data);
      auth.login(res.data.user['username']);
    })
    .catch(err=>console.log(err))
    navigate('/')
    }
  return (
    <div>
      <img className='lgimg' src='https://cdn.shopify.com/s/files/1/0526/2386/8096/collections/horse-feed.jpg?v=1619381283'style={{height:"200%",width:"100%"}}></img>
        <form className='lgform' onSubmit={handlesignin}>
        <label>Email</label><br/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}