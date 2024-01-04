import mongoose from "mongoose";

let isConnected=false;
console.log(process.env.MONGODB_URL)
export const connecttoDB = async ()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log("mongo is connected ")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"Dashboard",
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch (error) {
        console.log("object")
        console.log(error)
    }
}