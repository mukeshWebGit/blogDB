
import mongoose from 'mongoose';

const Conection = async (username, password) => {
    const  URL = `mongodb+srv://${username}:${password}@cluster0.dcgrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
          await mongoose.connect(URL);
          
        console.log("DB connected Successfully");

    }catch (error){
        console.log("DB not connected", error);
    }
}
export default Conection;