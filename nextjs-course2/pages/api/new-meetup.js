import { MongoClient } from "mongodb";

// api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    // 변경점 : req.body => JSON.parse(req.body);
    const data = JSON.parse(req.body);

    const client = await MongoClient.connect(
      "mongodb+srv://apfwnls14:apfwnls14@cluster0.tfamjla.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
