



export const Isadmin=async(req , res ,next)=>{
    if(!req.user || !req.user.admin == "admin")
    {
        return res.status(401).json({success:false,message:"admin access denied"})
    }
    next();
}