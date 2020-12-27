import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-react-402f3.firebaseio.com/",
});

export default instance;
