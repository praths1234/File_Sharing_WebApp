import mongoose from "mongoose";


const DBConnection = async (URL ) => {
try {
   
   await  mongoose.connect(URL , { useUnifiedTopology : true , useNewUrlParser : true });
  console.log('Database connected successfully');
} catch(error){
    console.error('Error while connecting with the database' , error.message);
}
}

export default DBConnection;