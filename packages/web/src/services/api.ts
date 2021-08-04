import axios from "axios";

const api = axios.create({
  baseURL: "https://fullstackchallengeapi.herokuapp.com",
});

export default api;
