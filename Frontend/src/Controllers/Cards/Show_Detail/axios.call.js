import axios from "axios"

export const get_card_detail =async(id)=>{
    return await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/show/" + id)
}