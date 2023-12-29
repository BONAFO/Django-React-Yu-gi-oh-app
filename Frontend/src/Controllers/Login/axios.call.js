import axios from "axios";

export const login = async (data) => {
    return axios.post(process.env.REACT_APP_SERVER_PROD + "users/", (data));
}
