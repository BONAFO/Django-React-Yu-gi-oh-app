import axios from "axios";

export const get_cards =async (queries)=>{
    let q = "/?"
    
    queries.map( query =>  {
        q += query + "&"
    })

    console.log(process.env.REACT_APP_SERVER_PROD + "cards/show" + q);
    const response = await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/show" + q, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
    });

    console.log(response);
}   