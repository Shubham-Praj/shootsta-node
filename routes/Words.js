import express from "express";
import { getWordDetails } from "../controllers/Words.js";

const wordRoutes = express.Router();

//Get word route
wordRoutes.get("/words/:word", getWordDetails);

export default wordRoutes;
