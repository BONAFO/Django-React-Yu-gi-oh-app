import axios from "axios";
import { redirect_to } from "../App";

const validate_token = (token) => {
    return axios.post(process.env.REACT_APP_SERVER_PROD + "validate-token/", { token: token })
};

const user_is_logged = async () => {
    const token = (localStorage.getItem("token"));
    // if(token !== null){

    // }else{

    // }
    if (token === null) {
        redirect_to({ to: "/home" })
    }

    try {
        await validate_token(token)
    } catch (error) {
        console.log(error);
        redirect_to({ to: "/home" })
    }

}

export default function User_Is_Logged(){
    user_is_logged()
}