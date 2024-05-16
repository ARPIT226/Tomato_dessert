import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://arpit226sagar:Mypassword123@cluster0.j3raobe.mongodb.net').then(()=>console.log("DB Connected"))
}

