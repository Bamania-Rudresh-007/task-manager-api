import mongoose from "mongoose"

const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGODB_KEY)
            .then(() => {
                console.log("MongoDB connected successfully");
            })
            .catch((err) => {
                console.log("Failed connecting MongoDb error: ", err.message);

            })
    } catch (error) {
        console.log("Failed connecting the database error: ", err.message);
        process.exit(1);
    }
}

export default connectDb;