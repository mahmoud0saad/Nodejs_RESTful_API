const express=require("express")
const shopsDs=require("../datasourse/shops")

const shopsRouter=express.Router()


shopsRouter.get("/",(req,res)=>{
    const limit =req.query.limit

    const allShops=shopsDs.fetchAllShops()

    res.status(200).json(allShops.slice(0,limit)).send()

})


module.exports=shopsRouter