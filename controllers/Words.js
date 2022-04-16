import { getDetialsFromAPI } from "../services/GetDetails.js";

export const getWordDetails = async (req, res) => {
  let wordDetails = await getDetialsFromAPI(req.params.word);
  return res.json(wordDetails);
};
