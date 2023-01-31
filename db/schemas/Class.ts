import mongoose from "mongoose";
import { SCHEMA_OPTIONS } from "../dbUtils";

const { Schema } = mongoose;

const ClassSchema = new Schema(
  {
    _id: { type: Number, required: true },
    year: { type: String, required: true },
    members: { type: Array, required: true },
  },
  SCHEMA_OPTIONS
);

export default ClassSchema;
