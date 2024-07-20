const express=require("express")

const app=express()

const db=require("./db")

require("dotenv").config()

const PORT=process.env.port || 3000

const {person}=require("./models/person")
const {menuitem}=require("./models/menu_item")

const bodyparser=require("body-parser")
app.use(bodyparser.json())

//const person=require("./models/person")

app.get("/",(req,res)=>{
    res.send("welcome to my hotel")
})


// // call kar is par "localhost:3000/idli"

// app.get("/idli",(req,res)=>{
//     res.send("sure sir the idli will be serverd within 10 minute")
// })


// app.post("/person",async(req,res)=>{

//     try{
//         const data=req.body
//         const newperson=new person(data)
//         const response=await newperson.save()
//         console.log("data saved")
//         res.status(200).json(response)
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({error:"internal server error"})
//     }

// })


const personroutes=require("./routes/person_routes")
app.use("/person",personroutes)

const menu_item=require("./routes/menu_routes")
app.use("/menu",menu_item)




//const PORT=process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log("server has started")
})