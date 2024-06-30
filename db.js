const mongoose=require("mongoose")

require("dotenv").config()

const mongourl=process.env.MONGODB_URL

mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db=mongoose.connection

db.on("error",(err)=>{
    console.log("error while connecting to database",err)
})

db.once("open",()=>{
    console.log("connected to mongo DB server")
})

// db.listen(3000,()=>{    isma listen thodhi na hoga vo to server ma hoga
//     console.log("lisening to port 3000")
// })

module.exports={
    db
}