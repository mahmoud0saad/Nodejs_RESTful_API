const express =require("express")
const datasourse =require("../datasourse/product")

const routers =express.Router()

routers.get("/",async(req,res) =>{
    const product =await datasourse.fetchProducts()
    res.status(200).json(product)

})



routers.get("/:id",function(req,res){
    const productId=req.params.id
    const product=datasourse.fetchProductsById(productId)

    if(product==undefined){
        res.status(404).json("not found")

    }else
    res.status(200).json(product)

})

 

module.exports=routers