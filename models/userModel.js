import mongoose from "mongoose";

//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Is Require"],
    },
    email: {
        type: String,
        required: [true, " Email is Require"],
        unique: true,
    }
})

export default mongoose.model("User", userSchema);