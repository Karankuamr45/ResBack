import restaurantModel from "../model/restaurantSchema.js"

const addRestaurantController=async(req,res)=>{
    try {
        const newRestaurant=await restaurantModel({
            name:req.body.name,
            description:req.body.description,
            rating:req.body.rating,
        })

        await newRestaurant.save();
        res.status(201).json({message:"new restaurant added",newRestaurant})
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Internal server error"})
    }

}

export {addRestaurantController}