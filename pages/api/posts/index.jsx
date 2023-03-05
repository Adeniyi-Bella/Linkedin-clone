import { connectToDatabase } from "../../../lib/mongodb";
import { Timestamp } from "mongodb";

export default async function handler(req, res) {
  //get the method and body from the request
  const { method, body } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
        //get all the posts from the database and sort them by timestamp in descending order and returns an array of posts
      const posts = await db.collection("posts").find()
      .sort({ timestamp: -1 }).toArray();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const post = await db.collection("posts").insertOne({ ...body, timestamp: new Timestamp() });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
