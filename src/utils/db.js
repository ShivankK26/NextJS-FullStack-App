import mongoose from "mongoose";

const MONDODB_URI = ";

const connect = async () =>{
    try {
        await mongoose.connect(MONDODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
    } catch (error) {
        throw new Error("Connection failed!")
    }
};

export default connect;
