import { create } from "apisauce";

const api = create({
  baseURL: "GET https://newsapi.org/v2",

  ///top-headlines?country=us&apiKey=aa9f541d2b0d427daeef036182ee6672
});
const apiKey = "?country=us&apiKey=aa9f541d2b0d427daeef036182ee6672";

const getTopHeadline = api.get("/top-headlines" + apiKey);

export default {
  getTopHeadline,
};
