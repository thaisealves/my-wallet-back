import { db, objectId } from "../dbConection/mongo.js";
export async function postTransactions(req, res) {
  const { user } = res.locals;
  const userId = new objectId(user._id);

  try {
    await db.collection("transactions").insertOne({...req.body, userId});

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getTransactions(req, res) {
  const { user } = res.locals;
  const userTransactions = await db
    .collection("transactions")
    .find({ userId: user._id })
    .toArray();
  console.log(user._id);
  res.status(200).send(userTransactions);
}
