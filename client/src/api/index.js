import Axios from "axios";

const API = Axios.create({ baseURL: "http://localhost:5000/" });

export const userLogin = (easyproID, password) => {
  console.log(
    "the received easypro id and password is ",
    easyproID,
    " and ",
    password
  );
  return API.post(`/login`, { easyproID, password });
};

export const fetch_profile = () => API.get("/a");
export const getSingleUserInfo = () => API.get("/b");
