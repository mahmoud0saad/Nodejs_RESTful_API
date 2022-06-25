const MongoClient=require("mongodb").MongoClient

const uri ="mongodb+srv://mahmoudsaa:mahmoud123@cluster0.ui7bc.mongodb.net/test"

// const user=process.env.user

const connection=(async ()=>{
    const client =await MongoClient.connect(uri)

    const collection=client.db("SaadShop").collection("product")


    return {client ,collection }
})

module.exports=connection