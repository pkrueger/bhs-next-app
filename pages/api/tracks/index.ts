import dbConnect from "@/db/dbConnect";
import { getAllTracks } from "@/services/tracks";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    await dbConnect.connect();

    switch (method) {
      case "GET": {
        const tracks = await getAllTracks();
        res.status(200).send(tracks);
        break;
      }
      default:
        res.status(405).send("Method not implemented");
        break;
    }
  } catch (e: any) {
    res.status(400).send(e.message);
  }
}
