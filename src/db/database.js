const mongoose =require( "mongoose");
const  {DB_NAME}  = require( "../constants.js");

const connectDB = async () =>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`\n Database Connected!! DB HOST: ${connectInstance.connection.host}`)
    } catch (error) {
        console.log("Error in DB connection... " ,error)
        process.exit(1)
    }
}
module.exports = connectDB;
