import { connecttoDB } from "@utils/database";
import Prompt from "@model/prompt"
export const POST= async (req:any)=>{
const {userId,prompt,tag}=req.json();
try {
    await connecttoDB();
   const promt= new Prompt({
        userId,
        prompt,
        tag
    })
    return new Response(JSON.stringify(promt),{
        status:201
    })

} catch (error) {
    throw new Error()
}
}