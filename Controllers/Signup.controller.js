import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'
import Usermodel from "../Model/User.model.js";
import dotenv from 'dotenv'
dotenv.config()
const signup = async (req, res) => {

  try {
    const hashed_password = await bcrypt.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashed_password,
    };
    const new_user = new Usermodel(user);
    await new_user.save();
    return res.status(200).json({ msg: "Signup Successful" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({msg:'Error while signing up'})
  }
};

const login = async(req,res)=>{
   const  user = await Usermodel.findOne({email:req.body.email})
   if(!user){
    return res.status(400).json({msg:"Email Does Not Match"})
   }
   try{
   await bcrypt.compare(req.body.password,user.password,function(error,result){
    if(result){
        const jsontoken = jsonwebtoken.sign(user.toJSON(),process.env.key)
        res.status(200).json({
            token:jsontoken,
            name:user.name,
        })
    }else{
        res.status(400).json({msg:"password Does Not Match"})
    }
   })
   }catch(err){
    console.log(err)
    res.status(400).json({msg:"Error while Login"})
   }

}

export { signup,login};
