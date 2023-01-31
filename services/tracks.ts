import { TTrack } from "@/common/types";
import db from "@/db/db";

export async function getAllTracks() {
  const tracks: TTrack[] = await db.Tracks.find().populate("class");
  return tracks;
}

export function unused() {
  return "";
}
