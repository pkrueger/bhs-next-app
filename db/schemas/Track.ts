import mongoose from "mongoose";
import { SCHEMA_OPTIONS } from "../dbUtils";

const { Schema } = mongoose;

const trackSchema = new Schema(
  {
    year: { type: String, default: null },
    classId: { type: Number, default: null, ref: "Class" },
    album: { type: String, default: null },
    track: { type: Number, required: true },
    name: { type: String, required: true },
    group: { type: String, default: null },
    link: { type: String, required: true },
  },
  SCHEMA_OPTIONS
);

const Track = mongoose.models.Track || mongoose.model("Track", trackSchema);
export default Track;
