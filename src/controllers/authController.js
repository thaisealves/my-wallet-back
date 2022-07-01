import bcrypt from "bcrypt";
import { db } from "../dbConection/mongo.js";
import { v4 as uuid } from "uuid";

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

export async function signIn(req, res) {
  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    //comparing if the passwords match: the one that was given now and the one on db
    const token = uuid();

    await db.collection("sessions").insertOne({
      userId: user._id,
      name: user.name,
      token,
    });

    res.send(202);
  } else {
    return res.status(401).send("Email ou senha incorretos");
  }
}
