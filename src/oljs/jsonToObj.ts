import axios from "axios";

export async function getJsonObj(url: string) {
  const res = await axios.get(url);
  return res.data;
}
