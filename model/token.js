import mongoose from "mongoose";

const tokenSchema = ({
    token : {
        type:String,
        require:true
    }
})
const token = mongoose.model('token', tokenSchema);
export default token;