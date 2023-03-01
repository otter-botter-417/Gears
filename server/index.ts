import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const ItemDatas = require("./src/v1/models/itemDatas");
const app = express();
const PORT = 5000;
import "dotenv/config";

app.use(express.json());
//DB接続
try {
  mongoose.connect(process.env.MONGDB_URL);
  console.log("DBと接続中");
} catch (error) {
  console.log(error);
}

//商品新規登録API
app.post("/itemDataRegister", async (req: Request, res: Response) => {
  try {
    const itemDatas = await ItemDatas.create(req.body);
    return res.status(200).json({ itemDatas });
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中");
});
