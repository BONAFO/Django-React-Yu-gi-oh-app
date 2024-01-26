import { useCardParamsContext } from "../Context/Cards_Params";
import { useFilterContext } from "../Context/Filter";
import { useCardTypeFilterContext } from "../Context/Type_Card_Filter";
import { clear_values } from "../Controllers/FIlter.functions";
import { get_id_by_filter } from "../Controllers/Options_Traslate";



export let export_HandleChange ;


export default function Card_Filters_Selector({ label, name, options }) {
  const { filter } = useFilterContext();
  const { setLink, setSpell, setTrap, setPendulum } =
    useCardTypeFilterContext();
  const { params } = useCardParamsContext();

  


  const HandleChange = (name, value) => {
    switch (name) {
      case "card_type":
        const link_id = get_id_by_filter("Monster Link", params.type);
        const spell_id = get_id_by_filter("Spell", params.type);
        const trap_id = get_id_by_filter("Trap", params.type);
        const pendulum_id = get_id_by_filter("Monster Pendullum", params.type);

        if (parseInt(value) == parseInt(link_id)) {
            clear_values(["stars", "def"], filter)
            setLink(true);
        } else {
            setLink(false);
            clear_values(["rank"], filter)

        }

        if (parseInt(value) == parseInt(spell_id)) {
            clear_values(["special"], filter)
            setSpell(true);
        }else{
            setSpell(false);

        }
        if (parseInt(value) == parseInt(trap_id)) {
            clear_values(["special"], filter)
            setTrap(true);
        }else{
            setTrap(false);

        }

        if (parseInt(value) == parseInt(pendulum_id)) {
            setPendulum(true);
        } else {
            clear_values(["scale"], filter)
            setPendulum(false);
        }

      default:
        filter[name] = value

        break;
    }
  };

  export_HandleChange = HandleChange;

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
