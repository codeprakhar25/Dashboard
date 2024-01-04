import { Schema,model,models } from "mongoose";

const promptSchema= new Schema({
    prompt:{
        type: String,
        required:[true,'Prompt is required'],
    },
    userId:{
        type: String,
        required:[true,'UserSession is required!']
    },
    tag:{
         type:String,
    }
});

const Prompt=models.Prompt || model("Prompt",promptSchema);

export default Prompt


