import axios from "axios";

export const fetchData = (str) => {
  const apiEp = `http://www.omdbapi.com/?t=${str}&apikey=f167da47`;
  try {
    return axios.get(apiEp);
  } catch (error) {
    console.log(error);
  }
};
