import mongoose from "mongoose";
import { SCHEMA_OPTIONS } from "../dbUtils";

const { Schema } = mongoose;

const dogSchema = new Schema(
  {
    name: String,
  },
  SCHEMA_OPTIONS
);

const Dog = mongoose.models.Dog || mongoose.model("Dog", dogSchema);
export default Dog;
