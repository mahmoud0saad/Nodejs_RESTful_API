const {v4 : uuidV4} =require("uuid")
var orders=[]



const ds={
    createOrder :  (orderItem) =>{
        orderItem.id=uuidV4()
        orders.push(orderItem)
        return orderItem.id
    },
    getAllOrder :  () =>{ 
        return orders
    }
}

module.exports =ds