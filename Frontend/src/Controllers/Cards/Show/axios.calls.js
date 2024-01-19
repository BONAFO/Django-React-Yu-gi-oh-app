import axios from "axios";

export const get_cards =async ()=>{
    const response = await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/show/", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
    });

    console.log(response);
}