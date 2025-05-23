import User from '../model/user.js';   
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; 
import dotenv from 'dotenv';
import Token from '../model/token.js';

dotenv.config();
export const SignupUser = async (request, response) => { 
  
  try{
    //const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(request.body.password, 10)
    const user = {username: request.body.username, name:request.body.name, password:hashPassword};
    const newUser = new User (user);
    newUser.save();
    return(
      response.status(200).json({msg: 'Signup Successfull'})
    )
  } catch(error){
    return response.status(500).json({msg : 'error while signup user'})
  }

}
export const LoginUser = async (request, response) => { 
  let user = await User.findOne({username : request.body.username})
  if (!user){
    return response.status(400).json({msg:'Username does not match'})
  }
  try{
    let match = await bcrypt.compare(request.body.password, user.password);
    if(match){ 
      const accessToken = Jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
      const refressToken = Jwt.sign(user.toJSON(), process.env.REFRESS_SECRET_KEY);
      const newToken = new Token({token: refressToken});
      await newToken.save();
      return response.status(200).json({accessToken:accessToken, refressToken:refressToken, name:user.name, username:user.username})
  
    }else{
      return response.status(400).json({msg:'Password does not match'})
    }
  }catch(error){
     return response.status(500).json({msg:'Error while login user'}) 
  }
  }