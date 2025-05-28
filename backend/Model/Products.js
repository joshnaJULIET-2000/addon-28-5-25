//import
const mongoose = require('mongoose');

//schema
var schema=mongoose.Schema({
Pname:String,
Price:Number,
Desc:String,
Image:String
})

//model creation
var ProductModel=mongoose.model("product",schema)

//export
module.exports=ProductModel