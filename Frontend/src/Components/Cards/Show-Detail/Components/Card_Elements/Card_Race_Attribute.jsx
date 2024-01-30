import { useResponsiveContext } from "../../../../../Context/IsMobile";
import { build_icon } from "../../../../../Controllers/Cards/Show/api-icons";
import { capitalizate } from "../../../Show/Controllers/Capitalize";
import { isNotNull } from "../../functions/isNotNull";

const get_attributes_value = (card_data, respo) => {
    const attribute = (

        isNotNull(card_data.attribute)
    ) ? (

        build_icon({
            label: card_data.attribute,
            type_icon: "attr",
        })
    ) : (

        false
    );

    const race = (
isNotNull(card_data.card_subtype)
        // card_data.card_subtype !== undefined &&
        // card_data.card_subtype !== null &&
        // card_data.card_subtype.length !== 0
    ) ? (

        build_icon({
            label: card_data.card_subtype,
            type_icon: "race",
        })
    ) : (

        false
    );




    const elements = [];


        if(attribute !== false || race !== false){
            if (attribute !== false) {
                elements.push(<>
                    <img  key={"img-attr"} 
                        className={`star-img-${respo} attribute-img-${respo}`}
                        src={attribute}
                        alt=""
                    />
                    <label  key={"lb-attr"}  className={`attribute-txt-${respo}`} htmlFor="">
                        {capitalizate(card_data.attribute.name)}
                    </label>
                </>)
        
            }
        
            if (race !== false) {
                elements.push(<>
                    <img  key={"img-race"} 
                        className={`star-img-${respo} race-img-${respo} ${(!attribute) ? (` is-magic-${respo}`) : ("")}`}
                        src={race}
                        alt=""
                    />
                    <label   key={"lb-race"} className={`attribute-txt-${respo}`} htmlFor="">
                        {capitalizate(card_data.card_subtype.name)}
                    </label>
                </>)
        
            }
        
            return (
                <div key={"img-attr-race"}  className={`attributes-race-cont-${respo}`}>
                    {elements}
                    <br />
                </div>
            );
        }else{
            return <>
            </>
        }
};


export default function Card_RACE_ATTRIBUTE({card_data}) {
    const respo = useResponsiveContext();


    return <>
{get_attributes_value(card_data,respo)}
    </>
}