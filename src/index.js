const express = require("express");
const mongoose = require("mongoose");
const route = require("./route");
const app = express();
const mongoDB=process.env.MONGO_URL

mongoose.set('strictQuery', false)
mongoose.connect(  mongoDB,{ useNewUrlParser: true },(err)=>{
  if(err){
    console.log("mongoDB is not connected",err)
  }else{
    console.log("mongoDB is connected")
  }
})

app.use(express.json());
app.use("/", route);

const PORT=process.env.PORT
app.listen(PORT || 3000, function () {
  console.log("express running on PORT " + (PORT || 3000));
});
