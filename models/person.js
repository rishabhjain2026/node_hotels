const mongoose=require("mongoose")

const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        required:true,
        enum:["chef","waiter","manager"],
        default:"chef"
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number
    }
})

const person=mongoose.model("person",personschema)

module.exports={
    person
}