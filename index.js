require ('dotenv').config()
// import dotenv from './env'
const connectDB = require("./src/db/database.js");
const express = require("express")
const app = express()
// dotenv.config(
//     {path:'../env'}
// )

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4500,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })
})
.catch((err)=>{
    console.log(`dataabse not connected error message: ${err}`)
})
app.get('/api/v1/about',(req,res)=>{
    res.send("<h1>Response is getting successfully.........</h1>")
})


/*
// Method One
import express from "express"
const app = express()   

;( async ()=>{
    try {
       await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
       app.on("error",(error)=>{
        console.log(("error ", error));
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${porcess.env.PORT}`);
       })
    } catch (error) {
        console.log("error",error);
        throw error;
    }
}) 
*/ 
