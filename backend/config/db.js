import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect(Mongo_Url).then(()=>console.log("DB Connected"))
}

