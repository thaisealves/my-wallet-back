import { db, objectId } from "../dbConection/mongo.js";
import dayjs from "dayjs";
export async function postTransactions(req, res) {
  const now = dayjs();

  const { user } = res.locals;
  const userId = new objectId(user._id);

  try {
    await db
      .collection("transactions")
      .insertOne({ ...req.body, userId, day: now.format("DD/MM") });

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
  res.status(200).send(userTransactions);
}

export async function deleteTransactions(req, res) {
  const { id } = req.params;
  try {
    await db.collection("transactions").deleteOne({ _id: new objectId(id) });
    res.sendStatus(204)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
