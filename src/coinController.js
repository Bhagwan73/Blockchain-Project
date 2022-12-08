const axios=require("axios");
const coinModel = require("./coinModel")


exports.getCoins=async function(req,res){
    let options={
        method:"get",
        url:"https://api.coincap.io/v2/assets"
    }
    let result= await axios(options)
    let data=result.data.data.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr})

    let a=[];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let uniqueName= await coinModel.findOneAndUpdate({name:element.name},{$set:element},{upsert:true,new:true})
        a.push(uniqueName)
    }  
    await coinModel.deleteMany({_id: { $nin: a.map((i) => i._id), },})
    return res.status(200).json({status:true,msg:data})
}


//                       <<====>>_OR_<<====>>


// exports.getCoins=async function(req,res){
//     let options={
//         method:"get",
//         url:"https://api.coincap.io/v2/assets"
//     }
//     let result= await axios(options)
//     let data=result.data.data.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr})
//     //DELETE_ALL_DATA_FROM_COINS_COLLECTION
//     await coinModel.deleteMany({})  
//    //CREATE_THE_ALL_COINS_DOCUMENT        
//     await coinModel.create(data)
//     return res.status(200).json({status:true,msg:data})
// }
