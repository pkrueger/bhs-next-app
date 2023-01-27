import mongoose from "mongoose";
import Dog from "./models/Dog";

class DbContext {
  Dog = mongoose.model("Dog", Dog);
}

const dbContext = new DbContext();
export default dbContext;
