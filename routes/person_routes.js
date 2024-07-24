const express=require("express")

const router=express.Router()

const Menuitem=require("./../models/menu_item")
//const { person } = require("../models/person")

router.post("/",async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new Menuitem(data)
        const response=await newMenu.save()
        console.log("menu added")
        res.status(200).json(response)

    }
    catch(err){
        console.log("error in adding menu",err)
        res.status(500).json({err:"error in adding menu"})
    }

})

router.get("/",async(req,res)=>{
    try{
        console.log("displayed menu")
        const menu=await Menuitem.find()
        res.status(200).json(menu)
    }
    catch(err){
        console.log("error in geting menu item",err)
        res.status(500).json({err:"cannot get menu item"})

    }
})


// router.put("./:id",async(req,res)=>{
//     try{
//         const personid=req.params.id
//         const updatedpersondata=req.body

//         const response=await person.findByIdAndUpdate(personid,updatedpersondata,{
//             new:true,
//             runValidators:true,
//         })


//         if(!response){
//             return res.status(404).json({error:"person not found"})
//         }

//         console.log("data updated")
//         res.status(200).json(response)
//     }
//     catch(err){
//         console.log("error occured",err)
//         res.status(500).json({error:"error occured"})
//     }
// })

module.exports=router