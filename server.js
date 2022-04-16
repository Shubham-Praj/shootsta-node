import express from "express";
import dotenv from "dotenv";
import wordRoutes from "./routes/Words.js";

dotenv.config();
const app = express();

//Routes for words 
app.get("/words/:word", wordRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server up and running");
});
