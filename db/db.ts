import mongoose from "mongoose";
import ClassSchema from "./schemas/Class";
import TrackSchema from "./schemas/Track";

class DB {
  Classes = mongoose.models.Class || mongoose.model("Class", ClassSchema);

  Tracks = mongoose.models.Track || mongoose.model("Track", TrackSchema);
}

const db = new DB();
export default db;
