import express from 'express';
import homeController from '../controller/homeController.js';
import { addRestaurantController } from '../controller/restaurantController.js';
const router=express.Router()

router.get('/',homeController)

router.post('/addRestaurant',addRestaurantController)



export default router;