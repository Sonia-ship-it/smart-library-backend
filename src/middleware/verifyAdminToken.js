const jwt=require("jsonwebtoken")
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET_KEY
const verifyAdminToken=(req,res,next) => {
    const token=req.headers['authorization']?.split(' ')[1];
    if(!token) {
        return res.status(401).json({message: "Access Denied. No token provided"});    
    }
      console.log("Token received:", token.substring(0, 20) + "...")
    jwt.verify(token,JWT_SECRET, (err, user) => {
        if(err) {
            console.log("Error:", err.message)
            console.log("JWT_SECRET used:", JWT_SECRET)
            return res.status(403).json({message: 'Invalid credentials'});
        }
        console.log("Token verified successfully")
        console.log("Decoded user:", user)
        if (user.role !== "admin") {
            console.log("User is NOT admin:", user.role)
            return res.status(403).json({ message: "Admin access only" })
        }
        req.user=user;
        next();
    })
}
module.exports=verifyAdminToken;