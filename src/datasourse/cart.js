
var cart=[]



const ds={

    addToCart: (cartItem)=>cart.push(cartItem),
    getCartItems:( )=>cart,
    getCartId:(id)=>cart.find((e)=>e.id==id),
    deletCartId:(id)=>cart=cart.filter((element)=>element.id!=id),
    clearCart:()=> cart=[] ,
    updateCart:(id,newItem)=>{
        const existItem=cart.find((e)=>id==e.id)

        if(existItem!=undefined){
            const indexItem=cart.findIndex((e)=>id==e.id)
            const mergeItem={...existItem,...newItem}
            cart[indexItem]=mergeItem
            
        }else{
            // this.addToCart(newItem)
        }

   
    
    }
}


module.exports=ds