import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.listen(PORT, () => {
  console.log(`✅ Server Start ${PORT}`);
});
