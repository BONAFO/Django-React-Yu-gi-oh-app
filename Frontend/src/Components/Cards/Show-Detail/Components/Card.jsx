import { useResponsiveContext } from "../../../../Context/IsMobile";

import "../../../../styles/Card_Detail/manifiest.css";
import { useCardDataContext } from "../Context/Card_Data";
import { isNotNull } from "../functions/isNotNull";
import Card_Allowed from "./Card_Elements/Card_Allowed";
import Card_ATK_DEF from "./Card_Elements/Card_Atk_Def";
import Card_Description from "./Card_Elements/Card_Description";
import Card_Description_Pendulum from "./Card_Elements/Card_Description_Pendulum";
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

    const get_card =()=>{
        try {
             if(card_data.card_subtype.card_family.includes("t")){
              return "t"
            }else if(card_data.card_subtype.card_family[0] == "s"){
                return "s"
            }

            return false
        } catch (error) {
            return false
        }
    }
    get_card()
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


                        <Card_Allowed card_allowed={card_data.allowed}></Card_Allowed>

                        <Card_Pack key={"card-pack"} obtain_method={card_data.obtain_method}></Card_Pack>


                    </div>

                </div>
            </div>

            <div>

                <Card_Description_Pendulum card_pendulum_description={card_data.card_pendulum_description}>

                </Card_Description_Pendulum>    

                <Card_Description description={card_data.card_description} is_Pendulum={isNotNull(card_data.card_pendulum_description)} is_TrapMagic={get_card()}></Card_Description>
                
                {/* {create_description()} */}
            </div>
        </div>
    );
}

