import mongoose from "mongoose";

async function dbConnect() {
  if (process.env.CONNECTION_STRING) {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.CONNECTION_STRING);
  } else {
    console.log("Error connecting to DB");
  }
}

export default dbConnect;
