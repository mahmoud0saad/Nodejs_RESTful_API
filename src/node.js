console.log("hello world"); 
const clientConnection=require("./network/connection")

const express=require("express")


const productRouters=require("./routes/product")
const cartRouters=require("./routes/cart")
const orderRouters=require("./routes/order")
const shopRouters=require("./routes/shops")

const serverApi=express()

serverApi.use(express.json())

serverApi.use("/products",productRouters)
serverApi.use("/cart",cartRouters)
serverApi.use("/order",orderRouters)
serverApi.use("/shop",shopRouters)


serverApi.get("/",function(req,res){
    // res.send("hello from node js")
})
 
clientConnection().then((client)=>{
    console.log("clientConnection finsihed"); 
})
serverApi.listen(3000,()=>console.log("server is start"))
