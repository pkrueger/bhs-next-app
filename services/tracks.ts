import { TTrack } from "@/common/types";
import Track from "@/db/schemas/Track";

export async function getAllTracks() {
  const tracks: TTrack[] = await Track.find();
  return tracks;
}

export function unused() {
  return "";
}
