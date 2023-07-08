import mongoose from "mongoose";
const Carschema = mongoose.Schema({
    image:{
        type:String,
       
    },
    title:{
        type:String,
       
    },
    desc:{
        type:String,
       
    },
    name:{
        type:String
    }
})

const Carsmodel = mongoose.model('cars',Carschema)

export default Carsmodel