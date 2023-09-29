import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchCategories = () => {
  return api.get("/products/categories").then((response) => response.data);
};
