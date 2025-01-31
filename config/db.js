import mongoose from "mongoose";

//Database connection function
export const connectDB = async () => {
    const MONGO_URL= process.env.MONGO_URL || 'mongodb+srv://ashfaq:FKI86Yr4RS6KckCe@cluster0.kfadu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Database Connected`.bgGreen.black.underline);
    }).catch((err) => {
        console.log(`Database Connection Error ${err}`.bgRed.white.underline)
    })
}



