import axios from "axios";

export const signup = async (data) => {
    return axios.post(process.env.REACT_APP_SERVER_PROD + "users/create", (data));
}
