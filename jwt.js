const jwt=require("jsonwebtoken");

const jwtauthmiddleware=(req,res,next)=>{
    const token=req.header.authorization.split(' ')[1];
    if(!token)return res.status(401).json({erroe:"unauthorized"})
    
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }catch(err){
        console.error(err);
        res.status(401).json({error:"invalid token"});
    }
}

const generatetoken=(userdata)=>{
    return jwt.sign(userdata,process.env.JWT_SECRET,{expiresIn:30});
}


module.exports={jwtauthmiddleware,generatetoken}