import mongoose from "mongoose";
export function mongooseConnect() {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    else {
        const uri = "mongodb+srv://Soumya:Pinku123@cluster0.1z0q2sc.mongodb.net/?retryWrites=true&w=majority";
        return mongoose.connect(uri);
    }
}