import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {method, query: { id }} = req;

  const { db } = await connectToDatabase();

  if (method === "DELETE") {
    try {
        // Delete the post
        //new ObjectId(id) is used to convert the id string to an ObjectId
      await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "The post has been deleted!!" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}