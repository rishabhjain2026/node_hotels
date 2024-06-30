const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/hotels")

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