console.log("hello world"); 

const express=require("express")

const serverApi=express()

serverApi.get("/",function(req,res){
    res.send("hello from node js")
})


  function printAllObj( obj){
    for( (k) in obj)

    console.log(k)
}
// serverApi.listen(3000,()=>console.log("api server start"))

const obj1 = {n: "Mahmoud", age: 30, test:"delete it"}

printAllObj(obj1)

delete obj1.test

console.log("after delete")
printAllObj(obj1)



