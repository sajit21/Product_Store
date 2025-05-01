import express from "express";
import {
  createProducts,
  getProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { ProtectRoute } from "../middleware/ProtectRoute.js";
import { Isadmin } from "../middleware/admin.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/create", ProtectRoute, Isadmin, createProducts);
router.get("/:id", getProducts);
router.put("/:id", ProtectRoute, Isadmin, updateProduct);
router.delete("/:id", ProtectRoute, Isadmin, deleteProduct);

export default router;
