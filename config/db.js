import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Database Connected`.bgGreen.black.underline);
    }).catch((err) => {
        console.log(`Database Connection Error ${err}`.bgRed.white.underline)
    })
}



