import axios from "axios";

export const wordpressApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_WORDPRESS_API ||
    "https://clientblogs.gexart.com",
  headers: {
    "Content-Type": "application/json",
  },
});