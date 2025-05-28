//import
const express=require("express")
require("./connection")
var proModel=require("./Model/Products")
var cors=require('cors')

//initialize
const app = express()

//mid
app.use(express.json());
app.use(cors())

//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

// add api 
app.post("/add",async(req,res)=>{
try {
    await proModel(req.body).save()
    res.send({message:"data added!!"})
} catch (error) {
    console.log(error)
}
})

//view api 
app.get("/view",async(req,res)=>{
try {
    var data=await proModel.find()
    res.send(data)
} catch (error) {
    console.log(error)
}
})

// //delete api
app.delete("/delete/:id",async(req,res)=>{
try {
    await proModel.findByIdAndDelete(req.params.id)
    res.send({message:"data deleted"})
} catch (error) {
    console.log(error)
}
})

 //update api
app.put("/update/:id",async(req,res)=>{
try{
    await proModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
}catch (error){
    console.log(error)
}

})

//port setting
app.listen(3004,()=>{
    console.log("Port is running")
})