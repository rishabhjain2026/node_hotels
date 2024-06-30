const mongoose=require("mongoose")

const menuschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredent:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }

})

const Menuitem=mongoose.model("Menuitem",menuschema)

module.exports=Menuitem