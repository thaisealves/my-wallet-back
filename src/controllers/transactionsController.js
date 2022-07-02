export async function postTransactions(req, res) {
res.send(req.body)

//   try {
//     await db.collection("transactions").insertOne(req.body);

//     res.sendStatus(201);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
}

export async function getTransactions(req, res) {
  const userTransactions = await db.collection("transactions").find().toArray();
  res.status(200).send(userTransactions);
}
