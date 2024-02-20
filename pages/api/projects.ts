import { connect, getDatabase } from "../../db/connection";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connect();
      const db = getDatabase();
      const collection = db.collection("projects");
      const data = await collection.find({}).toArray();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error connecting to database" });
    } finally {
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
