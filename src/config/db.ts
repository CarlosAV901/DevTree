import mongoose from "mongoose";
import colors from 'colors'

export const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI
        const {connection} = await mongoose.connect(url) 

        console.log(`MongoDB conectado en ${connection.host} ${connection.port}`)
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1)
    }
}