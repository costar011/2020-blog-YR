import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./router/globalRouer";
import path from "path";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");

app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", globalRouter);

app.get("/contact", globalRouter);

app.listen(PORT, () => {
  console.log(`✅ Server Start ${PORT}`);
});
