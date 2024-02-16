import axios from "axios";

export const has_perms = async (data) => {
  return axios.post(
    process.env.REACT_APP_SERVER_PROD + "users/validate-perms/",
    { perms: data, token: sessionStorage.getItem("token") }
  );
};
