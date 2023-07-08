import Carsmodel from "../Model/Carsmodel.js"


const carspost = async(req,res)=>{
  
    try{
      const new_post = await new Carsmodel(req.body)
      new_post.save()
      return res.status(200).json({msg:"Data Posted Successfully"})
    }catch(err){
        console.log(err)
    }
}

export {carspost}