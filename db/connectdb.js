import mongoose from 'mongoose';

const connectdb=async(DATABASE_URL)=>{

    try {
        const DATABASE_NAME={
            dbName:"Mongo"
        }
        await mongoose.connect(DATABASE_URL,DATABASE_NAME)
        console.log("Database of ch1 is connected")
    } catch (error) {
        console.log(error.message)
    }
    
}

export default connectdb;