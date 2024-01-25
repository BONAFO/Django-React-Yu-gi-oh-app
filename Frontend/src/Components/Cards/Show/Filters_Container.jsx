import Card_Filters_Selector from "./Components/Card_Filters_Selector";
import { useCardParamsContext } from "./Context/Cards_Params";
import { useCardTypeFilterContext } from "./Context/Type_Card_Filter";
import {
  create_arr_options,
  create_number_options,
} from "./Controllers/Options_Creators";
import { card_type_traslate } from "./Controllers/Options_Traslate";

export default function Filters_Container() {
  const { params } = useCardParamsContext();
  const { isLink } = useCardTypeFilterContext();

  return (
    <>
      <Card_Filters_Selector
        label={"Starts/Ranks Min"}
        name={"level_min"}
        options={create_number_options(-1, 12)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Starts/Ranks Max"}
        name={"level_max"}
        options={create_number_options(-1, 12)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Allowed"}
        name={"allowed"}
        options={create_number_options(-1, 3)}
      ></Card_Filters_Selector>

      <br />

      {isLink ? (
        <>
          {" "}
          <Card_Filters_Selector
            label={"Link Rank Min"}
            name={"link_rank_min"}
            options={create_number_options(-1, 6)}
          ></Card_Filters_Selector>
          <Card_Filters_Selector
            label={"Link Rank Max"}
            name={"link_rank_max"}
            options={create_number_options(-1, 6)}
          ></Card_Filters_Selector>
          <br />
        </>
      ) : (
        ""
      )}

      <Card_Filters_Selector
        label={"Pendulum Min"}
        name={"pendulum_scale_min"}
        options={create_number_options(-1, 12)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Pendulum Max"}
        name={"pendulum_scale_max"}
        options={create_number_options(-1, 12)}
      ></Card_Filters_Selector>

      <br />

      <Card_Filters_Selector
        label={"Rarity"}
        name={"rarity"}
        options={create_arr_options(params.rarity)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Attribute"}
        name={"attribute"}
        options={create_arr_options(params.attributes)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Card type"}
        name={"card_type"}
        options={create_arr_options(params.type, card_type_traslate)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Card Race"}
        name={"race"}
        options={create_arr_options(params.sub_type)}
      ></Card_Filters_Selector>
    </>
  );
}
