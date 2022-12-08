const mongoose=require("mongoose")
const coinSchema= new mongoose.Schema({
    symbol:{
        type:String,
        unique:true
    },
    name:{
        type:String,
       unique:true
    },
    marketCapUsd:{
        type:String
    },
    priceUsd:String,
    _v:{
        type:Number,
        select:false
    }
})

module.exports=mongoose.model("Coin",coinSchema)

