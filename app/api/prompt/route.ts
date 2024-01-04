import Prompt from "@model/prompt";
import { connecttoDB } from "@utils/database"
import { connect } from "http2"

export  const GET=async ()=>{
try {
    await connecttoDB();
    const prompts= await Prompt.find({}).populate('Id');

    return new Response(JSON.stringify(prompts),{status:200})
} catch (error) {
    return new Response(JSON.stringify("Failed to fetch"),{status:500})
}
}