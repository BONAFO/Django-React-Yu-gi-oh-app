import axios from "axios";

export const login = async (data) => {
    const response = await axios.post(process.env.REACT_APP_SERVER_PROD + "users/", (data));
    console.log(response);
}
