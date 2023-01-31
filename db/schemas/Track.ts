import mongoose from "mongoose";
import { SCHEMA_OPTIONS } from "../dbUtils";

const { Schema } = mongoose;

const TrackSchema = new Schema(
  {
    classId: { type: Number, ref: "Class" },
    album: { type: String, default: null },
    track: { type: Number, required: true },
    name: { type: String, required: true },
    group: { type: String, default: null },
    link: { type: String, required: true },
  },
  SCHEMA_OPTIONS
);

TrackSchema.virtual("class", {
  ref: "Class",
  localField: "classId",
  foreignField: "_id",
  justOne: true,
});

export default TrackSchema;
