const uid=require("uuid")
const express=require("express")
const orderDs=require("../datasourse/order")
const cartDs=require("../datasourse/cart")

const uuidV4=uid.v4.apply()
const routers=express.Router()

routers.post("/",(req,res)=>{
   const id= orderDs.createOrder(req.body)
    cartDs.clearCart()
    res.status(200).location("https://google.com").send()
})

routers.get("/",(req,res)=>{
    res.status(200).json(orderDs.getAllOrder())
})


module.exports=routers