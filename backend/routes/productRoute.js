import express from 'express';
import { createAllProducts,getAllProducts,deleteProducts,getProducts,updateProducts } from '../controllers/productController.js';

const router=express.Router();

router.get('/', getAllProducts); 
router.post('/', createAllProducts);
router.post('/:id', getProducts);
router.post('/:id', updateProducts);
router.post('/:id', deleteProducts);



export default router;