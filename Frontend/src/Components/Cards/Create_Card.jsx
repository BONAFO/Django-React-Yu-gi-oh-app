import { useEffect, useState } from "react"
import { get_card_form } from "../../Controllers/Cards/axios.call";
import Special_Attribute from "./Special_Attributre";
import create_link_options from "./Links_Elements";
import create_pendulum_options from "./Pendullum_Elements";
import { create_numeric_options } from "./Numbers_Generator";
import { useForm } from "react-hook-form";
import Error_Message from "../Error.MSJ";

export default function Create_Card() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // useEffect(async () => {
  //   const model =  await get_card_model()
  //   console.log(model);
  // }, [])

  const [card_basic_type, setBasicType] = useState("MONSTER");

  const [card_options, setCardOptions] = useState({});

  const [isPendulum, setPendullum] = useState(false);

  const [isLink, setLink] = useState(false);

  const [error_list, setErrorList] = useState([]);

  const load_card_form = async (cardtype) => {


    try {
      const data = (await get_card_form(cardtype.toLowerCase())).data.data
      setCardOptions(data);

    } catch (error) {
      console.log(error);
      return ""
    }


  }


  useEffect(() => {
    load_card_form(card_basic_type)
  }, [])


  const { attributes, race, rarity, type } = card_options

  return <div>
    <form onSubmit={(e) => {
      console.log(1);
      e.preventDefault()
      // const errlist = [];
      // errlist.push("name")
      // setErrorList(errlist)
    }}>
      <div>
        <label id="" className="" htmlFor="">CARD NAME</label>
        <br />
        <input type="text" required name="name" id="" className="" placeholder="CARD NAME" />
        {(error_list.indexOf("name") !== -1) ? (<Error_Message msj={"Errorsito"} ></Error_Message>) : ("")}
      </div>

      <br />
      <div>
        <label id="" className="" htmlFor="">CARD TYPE</label>
        <br />
        <select onChange={(e) => {
          const newdata = e.target.value;
          setPendullum(false);
          setLink(false);
          setBasicType(newdata)
          load_card_form(e.target.value)
        }} id="">
          <option value="MONSTER">MONSTER</option>
          <option value="SPELLCARD">SPELLCARD</option>
          <option value="TRAP">TRAP</option>
        </select>
        <br />

      </div>

      <div>
        <label id="" className="" htmlFor="">CARD IMAGE</label>
        <br />
        <input
          {...register('url_img')}
          type="text" name="url_img" id="" className="" placeholder="URL IMG" />
        <br />

      </div>

      <div>
        <label id="" className="" htmlFor="">CARD DESCRIPTION</label>
        <br />
        <textarea
          {...register('card_description', { required: true })}
          type="text" name="card_description" id="" className="" placeholder="Card Description" />
        <br />
        {errors.name && <p>Error. You must provide a Card description</p>}
      </div>

      <Special_Attribute data={attributes} label={"CARD ATTRIBUTE"} name={"attributex"}></Special_Attribute>




      {(card_basic_type == "MONSTER") ? (
        <div>
          <div>
            <label id="" className="" htmlFor="">STARS/ RANK</label>
            <br />
            <select
              {...register('stars')}
              id="">
              {create_numeric_options(1, 12)}
            </select>
            <br />
          </div>


          <div>
            <label id="" className="" htmlFor="">ATTACK POINTS</label>
            <br />
            <input
              {...register('card_atk')}
              type="text" id="" className="" />
            <br />
          </div>


          <div>
            <label id="" className="" htmlFor="">DEFENSE POINTS</label>
            <br />
            <input
              {...register('card_def')}
              type="text" id="" className="" />
            <br />
          </div>
        </div>

      ) : ("")}


      <Special_Attribute data={race} label={"CARD RACE"} name={"card_subtype"}></Special_Attribute>
      <Special_Attribute data={rarity} label={"CARD RARITY"} name={"card_rarity"}></Special_Attribute>



      <Special_Attribute data={type} label={"CARD TYPE"} name={"card_type"} cb={(e) => {
        const option = type.filter(typ => typ.id == e.target.value)[0];
        setPendullum(false);
        setLink(false);
        if (option.name.toLowerCase().includes('pendullum')) {
          setPendullum(true);
        } else if (option.name.toLowerCase().includes('link')) {
          setLink(true);
        }
      }}></Special_Attribute>


      {create_link_options(isLink)}
      {create_pendulum_options(isPendulum)}

      <div>
        <label

          id="" className="" htmlFor="">HOW TO OBTAIN IT</label>
        <br />
        <input
          {...register('obtain_method')}
          type="text" id="" className="" placeholder="PACKS,METHODS..." />
        <br />
      </div>

      <div>
        <label id=""

          className="" htmlFor="">MAX ALLOWED</label>
        <br />
        <select
          {...register('allowed')}
          className="" id="">
          {create_numeric_options(1, 3)}
        </select>
        <br />
      </div>

      <button>sad</button>
    </form>
  </div>
}