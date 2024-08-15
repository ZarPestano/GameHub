import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "35cc5a0ead024b80ba4ad9bc58a9cc57"
  }
});
