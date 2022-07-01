import bcrypt from "bcrypt";
import { db } from "../dbConection/mongo.js";

export async function signUp(req, res) {
  const user = req.body;
  const passwordHash = bcrypt.hashSync(user.password, 10);
  try {
    await db.collection("users").insertOne({ ...user, password: passwordHash });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
