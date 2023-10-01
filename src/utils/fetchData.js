import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchCategories = () => {
  return api.get("/products/categories").then((response) => response.data);
};

export const fetchProducts = () => {
  return api.get("/products").then((response) => response.data);
};

export const fetchProductsByCategory = (categoryName) => {
  return api.get(`/products/category/${categoryName}`).then((response) => response.data);
};