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
        await mongoose.connect("mongodb+srv://prakharkhatri123:prakhar@dashboard.p48hgl9.mongodb.net/?retryWrites=true&w=majority",{
            dbName:"Dashboard",
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch (error) {
        console.log("object")
        console.log(error)
    }
}