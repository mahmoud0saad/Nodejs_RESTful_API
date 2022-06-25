const express=require("express")
const cartDataSourse =require("../datasourse/cart")

const router=express.Router()


router.post("/",(req,res)=>{
    const body =req.body

    cartDataSourse.addToCart(body)
    console.log(" body is $body :body %s ",body)

    res.status(200).json(cartDataSourse.getCartItems())
})

router.get("/:id",(req,res)=>{
    const body =req.body

   const item= cartDataSourse.getCartId(req.params.id)
    console.log(" cartDataSourse.getCartId(req.id)  is $body :body %s ",req.id)


    res.status(200).json(item)

})
router.get("/",(req,res)=>{
    const body =req.body

    
    // console.log(" body is $body :body %s ",body)


    res.status(200).json(cartDataSourse.getCartItems())
    // res.status(200).location("/products").send()


})


router.delete("/:id",(req,res)=>{
    const body =req.body

    
    // console.log(" body is $body :body %s ",body)

    cartDataSourse.deletCartId(req.params.id)
    res.status(200).json(cartDataSourse.getCartItems())
    
})


router.patch("/:id",(req,res)=>{
    const body =req.body

    
    // console.log(" body is $body :body %s ",body)

    cartDataSourse.updateCart(req.params.id,body)
    res.status(200).json(cartDataSourse.getCartItems())
    
})

module.exports=router