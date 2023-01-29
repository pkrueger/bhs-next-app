import mongoose from "mongoose";

export default class dbConnect {
  static async connect() {
    const connectionString = process.env.CONNECTION_STRING || "";
    try {
      const status = await mongoose.connect(connectionString);
      console.log("[MONGOOSE CONNECTION SUCCESSFUL]");
      return status;
    } catch (e) {
      const status = 0;
      console.error("[MONGOOSE CONNECTION ERROR]: ", "Invalid Connection String", e);
      return status;
    }
  }
}
