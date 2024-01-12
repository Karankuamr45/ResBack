import mongoose from "mongoose";

const restaurantSchema=mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    rating:{
        type:String
    }
})

const restaurantModel=mongoose.model("Restaurant",restaurantSchema);

export default restaurantModel;