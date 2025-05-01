import express from "express";
import { Signup,Login,Logout} from "../controllers/userController.js";
import { ProtectRoute } from "../middleware/ProtectRoute.js";
const router = express.Router();

router.post("/signup",Signup);
router.post("/login",Login)
router.post("/logout",ProtectRoute,Logout)

export default router;
