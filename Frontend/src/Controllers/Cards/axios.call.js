import axios from 'axios';

export const get_card_form = async(type)=>{
    return await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/create/" + type)
}