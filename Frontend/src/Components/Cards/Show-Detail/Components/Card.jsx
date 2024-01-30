import { useResponsiveContext } from "../../../../Context/IsMobile";
import { build_icon } from "../../../../Controllers/Cards/Show/api-icons";

import "../../../../styles/Card_Detail/manifiest.css";
import { capitalizate } from "../../Show/Controllers/Capitalize";
import { useCardDataContext } from "../Context/Card_Data";
import Card_ATK_DEF from "./Card_Elements/Card_Atk_Def";
import Card_Pack from "./Card_Elements/Card_Pack";
import Card_Pendulum_Scales from "./Card_Elements/Card_Pendulum";
import Card_RACE_ATTRIBUTE from "./Card_Elements/Card_Race_Attribute";
import Card_Stars from "./Card_Elements/Card_Stars";
import Card_Image from "./Card_Elements/Image";
import Card_Name from "./Card_Elements/Name";

export default function Card_Detail() {
    const respo = useResponsiveContext();
    const { card_data } = useCardDataContext();
    console.log(card_data);

    const create_description = () => {
        const elements = [];

        if (
            card_data.card_pendulum_description !== undefined &&
            card_data.card_pendulum_description !== null &&
            card_data.card_pendulum_description.length !== 0
        ) {

        }

        if (
            card_data.card_pendulum_description !== undefined &&
            card_data.card_pendulum_description !== null &&
            card_data.card_pendulum_description.length !== 0
        ) {

        }

        return elements

    }

    return (
        <div>
            <div className={`page-cont-${respo}`}>

                <Card_Image key={"card-image"} card_image={card_data.url_img}></Card_Image>


                <div className={`card-content-cont-${respo}`}
                >


                    <Card_Name key={"card-name"} card_name={card_data.name}></Card_Name>
                    <br />

                    <div>

                        <Card_Stars key={"card-stars"} card_stars={card_data.stars}></Card_Stars>

    
                        <Card_Pendulum_Scales key={"card-pscales"} pendulum_scales={card_data.pendulum_scales}></Card_Pendulum_Scales>



                        <Card_ATK_DEF key={"card-atk-def-link"} card_data={{
                            atk: card_data.card_atk,
                            def: card_data.card_def,
                            link: card_data.card_link,
                        }}></Card_ATK_DEF>

                        <Card_RACE_ATTRIBUTE key={"card-attr-race"} card_data={{
                            attribute: card_data.attribute,
                            card_subtype: card_data.card_subtype,
                        }}></Card_RACE_ATTRIBUTE>


                        <Card_Pack key={"card-pack"} obtain_method={card_data.obtain_method}></Card_Pack>


                    </div>

                </div>
            </div>

            <div>
                {create_description()}
            </div>
        </div>
    );
}

