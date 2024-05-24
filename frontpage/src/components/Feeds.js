import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Feeds() {
  const navigate=useNavigate()
  const handleOnclick=()=>{
    navigate('/buy')
  }


  return (
    <div>
      <img src='https://petkeen.com/wp-content/uploads/2021/04/Buckeye-Nutrition-Gro-N-Win-Pelleted-Horse-Feed.jpg'></img>
      <p>Compounded Cattle Feed – Dairy Feed
₹1,950.00

Hindhusthaan Cattle Feeds offer adequate concentration of nutrition that support milk production, digestion and metabolic health. Different breeds of cows have specific nutritional requirements that affect their growth. This feed caters to all kinds of nutritional requirements.</p>
      <button className='prdetail' onClick={handleOnclick}>Buy Product</button><br/>
      <img src='https://hindhusthaan.in/wp-content/uploads/2024/02/Show-pro-600x600.jpg'></img>
      <p>Compounded Horse Feed Variant Show Pro
₹2,550.00

The Show-Pro variant Compounded Horse Feeds helps in Conditioning the Horses participating in Dressage and show Competitions.</p>
   
<button className='prdetail' onClick={handleOnclick}>Buy Product</button><br/>
<img src='https://hindhusthaan.in/wp-content/uploads/2024/02/Sports-Pro-600x600.jpg'></img>
<p>Compounded Horse Feed Variant Sports Pro
₹2,350.00

The Sports-Pro Variant helps the Horses in Training and Participating in active Sports Events like polo, show jumping, flat race and so on. It supplies abundant energy, power, focus, and concentration.</p>
   
<button className='prdetail' onClick={handleOnclick}>Buy Product</button><br/>
    </div>
  )
}
