import axios from 'axios';

export const get_card_atributte = async()=>{
    return await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/attributes/")
}