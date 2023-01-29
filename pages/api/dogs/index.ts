import dbConnect from "@/db/dbConnect";
import { createDog, getAllDogs } from "@/services/dogs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  try {
    await dbConnect.connect();

    switch (method) {
      case "GET": {
        const allDogs = await getAllDogs();
        res.status(200).send(allDogs);
        break;
      }
      case "POST": {
        const newDog = await createDog(body);
        res.status(200).send(newDog);
        break;
      }
      default:
        res.status(405).send(`Method ${method} not implemented`);
        break;
    }
  } catch (e: any) {
    res.status(400).send(e.message);
  }
}
