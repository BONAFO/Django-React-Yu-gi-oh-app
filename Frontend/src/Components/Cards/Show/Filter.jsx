import { useState } from "react";
import Modal_Filter from "./Modal_Filter";
import axios from "axios";


export default function Cards_Filter() {

    const get_card_params =async()=>{
        try {
            return (await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/filter-params/")).data
        } catch (error) {
            console.log(error);
            return []
        }
    }
    const [modal, setModal] = useState("");
    return <div>
        <button onClick={async () => {
            const params = await get_card_params()
            setModal(<Modal_Filter setModal={setModal} params={params}></Modal_Filter>)
        }}>Filter</button>

        {modal}
    </div>
}