import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to the database")).catch(e=>console.error(e)); 