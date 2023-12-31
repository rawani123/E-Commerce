import express from "express";
import {registerController,loginController, testController, forgetPasswordController, updateProfileController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register',registerController);

router.post('/login', loginController);

//forget password

router.post("/forget-password",forgetPasswordController)

//for testing

router.get('/test',requireSignIn,isAdmin,testController);

//protected auth route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected admin route
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});


router.put("/profile",requireSignIn,updateProfileController);


export default router;