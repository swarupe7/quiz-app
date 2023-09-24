import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://swarup6797:Jyothi123@cluster0.uhukfyg.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}