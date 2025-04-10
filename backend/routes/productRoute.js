import express from 'express';
import { createAllProducts,getAllProducts,deleteProduct,getProducts,updateProduct } from '../controllers/productController.js';

const router=express.Router();

router.get('/', getAllProducts); 
router.post('/', createAllProducts);
router.get('/:id', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);



export default router;