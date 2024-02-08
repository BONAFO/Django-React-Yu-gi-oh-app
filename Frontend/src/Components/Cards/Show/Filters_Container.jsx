import { useResponsiveContext } from "../../../Context/IsMobile";
import Card_Filters_Selector, {
  export_HandleChange,
} from "./Components/Card_Filters_Selector";
import { useCardParamsContext } from "./Context/Cards_Params";
import { useCardTypeFilterContext } from "./Context/Type_Card_Filter";
import {
  create_arr_options,
  create_number_options,
} from "./Controllers/Options_Creators";
import {
  card_type_traslate,
  filtrate_races,
} from "./Controllers/Options_Traslate";

export default function Filters_Container() {
  const { params } = useCardParamsContext();
  const { isLink, isSpell, isTrap, isPendulum } = useCardTypeFilterContext();
  const respo = useResponsiveContext()
  return (
    <>
      {!isSpell && !isTrap && !isLink ? (
        <>
          <Card_Filters_Selector
            label={"Starts/Ranks Min"}
            name={"stars_min"}
            options={create_number_options(-1, 12)}
          ></Card_Filters_Selector>

          <Card_Filters_Selector
            label={"Starts/Ranks Max"}
            name={"stars_max"}
            options={create_number_options(-1, 12)}
          ></Card_Filters_Selector>
          <br />
        </>
      ) : (
        ""
      )}

      {!isSpell && !isTrap ? (
        <>
          <label
            className={`filter-modal-selector-lab-${respo}`}
            htmlFor="">{"ATK Min"}</label>
          <input
            className={`filter-modal-input-${respo}`}
            type="number"
            name="card_atk_min"
            onChange={(e) => {
              export_HandleChange(e.target.name, e.target.value);
            }}
          />

          <label htmlFor=""
            className={`filter-modal-selector-lab-${respo}`}
          >{"ATK Max"}
          </label>
          <input
            className={`filter-modal-input-${respo}`}

            type="number"
            name="card_atk_max"
            onChange={(e) => {
              export_HandleChange(e.target.name, e.target.value);
            }}
          />

          {!isLink ? (
            <>
              <br />
              <label htmlFor=""
                className={`filter-modal-selector-lab-${respo}`}
              >{"DEF Min"}</label>
              <input
                className={`filter-modal-input-${respo}`}
                type="number"
                name="card_def_min"
                onChange={(e) => {
                  export_HandleChange(e.target.name, e.target.value);
                }}
              />

              <label htmlFor=""
                className={`filter-modal-selector-lab-${respo}`}
              >{"DEF Max"}</label>
              <input
                className={`filter-modal-input-${respo}`}
                type="number"
                name="card_def_max"
                onChange={(e) => {
                  export_HandleChange(e.target.name, e.target.value);
                }}
              />
              <br />
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {isLink ? (
        <>
          <br />
          <Card_Filters_Selector
            label={"Link Min"}
            name={"card_link_min"}
            options={create_number_options(-1, 6)}
          ></Card_Filters_Selector>
          <Card_Filters_Selector
            label={"Link Max"}
            name={"card_link_max"}
            options={create_number_options(-1, 6)}
          ></Card_Filters_Selector>
          <br />
        </>
      ) : (
        ""
      )}

      {isPendulum ? (
        <>
          <Card_Filters_Selector
            label={"Pendulum Min"}
            name={"pendulum_scales_min"}
            options={create_number_options(-1, 12)}
          ></Card_Filters_Selector>

          <Card_Filters_Selector
            label={"Pendulum Max"}
            name={"pendulum_scales_max"}
            options={create_number_options(-1, 12)}
          ></Card_Filters_Selector>
          <br />
        </>
      ) : (
        ""
      )}

      <Card_Filters_Selector
        label={"Allowed"}
        name={"allowed"}
        options={create_number_options(-1, 3)}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Rarity"}
        name={"card_rarity"}
        options={create_arr_options({ arr: params.rarity })}
      ></Card_Filters_Selector>

      {!isSpell && !isTrap ? (
        <>
          {(respo == "mob") ? (<br />) : ("")}
          <Card_Filters_Selector
            label={"Attribute"}
            name={"attribute"}
            options={create_arr_options({ arr: params.attributes })}
          ></Card_Filters_Selector>
        </>
      ) : (
        " "
      )}
      {(respo == "mob") ? (<br />) : ("")}
      <Card_Filters_Selector
        label={"Card type"}
        name={"card_type"}
        options={create_arr_options({
          arr: params.type,
          cb: card_type_traslate,
        })}
      ></Card_Filters_Selector>

      <Card_Filters_Selector
        label={"Card Race"}
        name={"card_subtype"}
        options={create_arr_options({
          arr: params.sub_type,
          cb: filtrate_races,
          extra: { trap: isTrap, spell: isSpell },
        })}
      ></Card_Filters_Selector>
    </>
  );
}
