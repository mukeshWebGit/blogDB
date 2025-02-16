import mongoose from "mongoose"; 

const userSchema = mongoose.Schema({
    name :{
        type:String,
        require:true,
    },
    user:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
})

const User = mongoose.model('User', userSchema);

export default User;
