import { useCardParamsContext } from "../Context/Cards_Params";
import { useFilterContext } from "../Context/Filter";
import { useCardTypeFilterContext } from "../Context/Type_Card_Filter";
import { get_id_by_filter } from "../Controllers/Options_Traslate";

export default function Card_Filters_Selector({
    label,
    name,
    options,
}) {
    const { filter, mod_filter } = useFilterContext();
    const { setLink} = useCardTypeFilterContext();
    const {params} = useCardParamsContext();
  


    const HandleChange = (name, value) => {
        switch (name) {
            case "card_type":
                
            const link_id= get_id_by_filter("Monster Link", params.type);
            const spell_id= get_id_by_filter("Spell", params.type);
            const trap_id= get_id_by_filter("Trap", params.type);
            const pendulum_id= get_id_by_filter("Monster Pendullum", params.type);

            if(parseInt(value) == parseInt(link_id)){
                setLink(true)
            }else{
                setLink(false)
            }

                break;

            default:
                break;
        }
    };
    

    return (
        <>
            <label htmlFor="">{label}</label>
            <select
                onChange={(e) => {
                    //   filter[e.target.name] = parseInt(e.target.value);
                    HandleChange(e.target.name, e.target.value);
                }}
                name={name}
                id=""
            >
                {options}
            </select>
        </>
    );
}
