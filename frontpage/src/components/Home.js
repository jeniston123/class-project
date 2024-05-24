import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()

  const handleclick=()=>{
    navigate('/feeds')

  }
  

  return (
    <div >
      <h5 className='name'>GS HORSE FEEDS</h5>
      <img className="bcimg"src='https://www.helpfulhorsehints.com/wp-content/uploads/female-holding-feeds-with-corn-barley-oats-grain-to-feed-the-brown-horse-at-stables-ss230308-1024x683.jpg'style={{height:"720px",width:"1300px"}}></img>
    <button  className="buy "type='sumbit' onClick={handleclick}>Buy Product</button>
    </div>
  )
}
