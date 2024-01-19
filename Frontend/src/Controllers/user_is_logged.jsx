import axios from "axios";


const validate_token = (token) => {
    return axios.post(process.env.REACT_APP_SERVER_PROD + "validate-token/", { token: token })
};

export const user_is_logged = async () => {
    const token = (localStorage.getItem("token"));

    if (token === null) {
        return false
    }

    try {
       await validate_token(token)
    } catch (error) {
        return false
    }

    return true
}

export default function User_Is_Logged(){
    user_is_logged()
}