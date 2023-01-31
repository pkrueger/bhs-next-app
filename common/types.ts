export interface TClass {
  id: number;
  members: string[];
  year: string;
}

export interface TTrack {
  id: string;
  classId: number | null;
  album: string | null;
  track: number;
  name: string;
  group: string | null;
  link: string;
  class?: TClass;
}
