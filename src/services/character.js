import axios from "axios";

export default {
  getCharacters(params) {
    return axios.get("https://rickandmortyapi.com/api/character/", {
      params: params || null,
    });
  },
};
