const express=require("express")

const app=express()

// done

const passport=require("./auth")
const db=require("./db")

//const passport=require("passport")
//const localstrategy=require("passport-local").Strategy;

require("dotenv").config()

const PORT=process.env.port || 3000

const {person}=require("./models/person")
const menuitem=require("./models/menu_item")

const bodyparser=require("body-parser")
app.use(bodyparser.json())
//const person=require("./models/person")

const logrequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] request made to: ${req.originalUrl}`);
    next();
}

app.use(logrequest);  //ye sab use karnga


//app.get("/",logrequest,(req,res)=>{  isma likhna padhta ha

const localautmiddleware=passport.authenticate('local',{session:false})
app.get("/",localautmiddleware,(req,res)=>{
    res.send("welcome to my hotel")
})


// passport.use(new localstrategy(async(USERNAME,password,done)=>{
//     try{
//         console.log('received credential',USERNAME,password);
//         const user=await person.findOne({username:USERNAME});
//         if(!user)
//             return done(null,false,{message:"incorrect username"});


//         const ispasswordmatch=user.password===password?true:false;
//         if(ispasswordmatch){
//             return done(null,user)
//         }else{
//             return done(null,false,{message:"inccorect password"})
//         }
//     }
//     catch(err){
//         return done(err);
//     }
// }))

app.use(passport.initialize());

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