import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "aa9f541d2b0d427daeef036182ee6672";
const getTopHeadline = () =>
  api.get("/top-headlines", { country: "us", apiKey });

export default {
  getTopHeadline,
};
