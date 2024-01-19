import axios from 'axios';








export const create_card = async (data) => {
    return await axios.post(process.env.REACT_APP_SERVER_PROD + "cards/create/", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
  }
  


export const get_card_form = async(type)=>{
    return await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/create/" + type, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
    })
}