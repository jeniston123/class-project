const express=require('express')
const cors=require('cors')
const connectDb=require('./configure/db')
require('dotenv').config()
const users=require('./routes/user')

const app=express()
app.use(cors())
app.use('/users',users)
connectDb()
app.get('/',(req,res)=>{
 res.send('homepage')
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})