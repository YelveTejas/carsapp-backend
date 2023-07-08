import Carsmodel from "../Model/Carsmodel.js"


const getpost=async(req,res)=>{
try{
const posts = await Carsmodel.find({})
res.status(200).json({data:posts})
}catch(err){
 console.log(err)
 res.status(400).json({msg:err})
}
}

export {getpost}