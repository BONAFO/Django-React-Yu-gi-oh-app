import { useState } from "react";
import Modal_Filter from "./Modal_Filter";
import axios from "axios";
import { useResponsiveContext } from "../../../Context/IsMobile";


export default function Cards_Filter() {

    const get_card_params = async () => {
        try {
            return (await axios.get(process.env.REACT_APP_SERVER_PROD + "cards/filter-params/")).data
        } catch (error) {
            console.log(error);
            return []
        }
    }
    const [modal, setModal] = useState("");
    const respo = useResponsiveContext()
    return <div>
        <button
            className={`filter-btn-${respo}`}
            onClick={async () => {
                const params = await get_card_params()
                document.getElementById("modal-filter").style.opacity = 1;
                setModal(<Modal_Filter setModal={setModal} params={params}></Modal_Filter>)
            }}>Filter</button>
        <br />
        <div className={`filter-cont-${respo}`} id="modal-filter">
            {modal}
        </div>
    </div>
}