import fetch from "node-fetch";

//Get details from API service 
export const getDetialsFromAPI = async (word) => {
  const res = await fetch(process.env.BASE_URL + word);
  const data = await res.json();
  return data;
};
