import User from '../model/user.js';   
import bcrupt from 'bcrypt'; 
export const SignupUser = async (request, response) => { 
  
  try{
    const salt = await bcrupt.genSalt();
    const hashPassword = await bcrupt.hash(request.body.password, 10)
    const user = {user: request.body.user, name:request.body.name, password:hashPassword};
    const newUser = new User (user);
    newUser.save();
    return(
      response.status(200).json({msg: 'Signup Successfull'})
    )
  } catch(error){
    return response.status(500).json({msg : 'error while signup user'})
  }

}
 