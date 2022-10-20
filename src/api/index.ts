import axios from "axios";
import { LayerObj } from "@/oljs/layer";

export const mockBaseURL = "/mock";

const mockHttp = axios.create({
  baseURL: mockBaseURL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getMock(url: string, params: object = {}): Promise<any> {
  console.log(url);
  return new Promise((resolve, reject) => {
    mockHttp({
      url,
      method: "GET",
      params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
