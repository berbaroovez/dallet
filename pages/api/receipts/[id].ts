import { NextApiRequest, NextApiResponse } from "next";
import { getReceipt } from "../../../util/db";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (typeof id === "string") {
    const response = await getReceipt(id);
    console.log(response);
    if (response?.error) {
      res.status(500).json({ error: response.error });
    }
    res.status(200).json(response?.data);
  }
};
