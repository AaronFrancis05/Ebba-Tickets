import mongoose from "mongoose";
let isonnected =false;

export const connectToDB = async()=>{
    try {
        if(isonnected){
            console.log('Mongoose already connected');
            return;
            
        }else{
            mongoose.set('strictQuery',true);
            await mongoose.connect(process.env.MONGODB_URI, {
              dbName: "Channele"
            });
            console.log('Mongoose is now connected');
            isonnected=true;
            
        }

    } catch (error) {
        console.log(error.message);
        
    }
}