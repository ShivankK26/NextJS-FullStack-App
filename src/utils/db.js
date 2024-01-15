import mongoose from "mongoose";

const MONDODB_URI = "mongodb+srv://ShivankKapur:12345@cluster0.z3zi5an.mongodb.net/test?retryWrites=true&w=majority";

const connect = async () =>{
    try {
        await mongoose.connect(MONDODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
    } catch (error) {
        throw new Error("Connection failed!")
    }
};

export default connect;