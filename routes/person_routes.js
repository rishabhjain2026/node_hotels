const express=require("express")
const { model, models } = require("mongoose")

const router=express.Router()

const {person}=require("../models/person")
const Menuitem = require("../models/menu_item")


router.post("/",async(req,res)=>{

    try{
        const data=req.body
        const newperson=new Menuitem(data)
        const response=await newperson.save()
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error"})
    }

})

router.get("/detail",async(req,res)=>{
    try{
        const data=await person.find()
        console.log("data fetched")
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"error occured"})
    }
})

router.put("./:id",async(req,res)=>{
    try{
        const personid=req.params.id
        const updatedpersondata=req.body

        const response=await person.findByIdAndUpdate(personid,updatedpersondata,{
            new:true,
            runValidators:true,
        })


        if(!response){
            return res.status(404).json({error:"person not found"})
        }

        console.log("data updated")
        res.status(200).json(response)
    }
    catch(err){
        console.log("error occured",err)
        res.status(500).json({error:"error occured"})
    }
})

router.get("/:worktype",async(req,res)=>{
    try{
        const worktype=req.params.worktype
        if(worktype=="chef" ||worktype=="waiter"||worktype=="manager"){
            const response=await person.find({work:worktype})
            console.log("displayed your search worktype")
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:"internal server error"})
        }
    }
    catch(err){
        console.log("erroe in getting this worktype",err)
        res.status(400).json({err:"cannot get this worktype"})
    }
})

module.exports=router


