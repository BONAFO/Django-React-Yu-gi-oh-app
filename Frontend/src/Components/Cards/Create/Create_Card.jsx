import { useEffect, useState } from "react";
import { create_card, get_card_form } from "../../../Controllers/Cards/Create/axios.call";
import Special_Attribute from "./Special_Attributre";
import create_link_options from "./Links_Elements";
import create_pendulum_options from "./Pendullum_Elements";
import { create_numeric_options } from "./Numbers_Generator";
import { get, useForm } from "react-hook-form";
import Error_Message from "../../Error.MSJ";
import Validate_Form_CCARD from "../../../functions/Create cards/validate.form";
import { validate_image } from "../../../functions/Create cards/validate_fields";
import {
  show_default_cursor,
  show_wait_cursor,
} from "../../../Controllers/show_cursor";
import axios from "axios";
import { redirect_to } from "../../../App";












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

  const [error_list, setErrorList] = useState({});

  const load_card_form = async (cardtype) => {
    try {
      const data = (await get_card_form(cardtype.toLowerCase())).data.data;
      setCardOptions(data);
    } catch (error) {
      if (error.response == undefined) {
        console.log(error);
      } else {
        if (error.response.status == 403) {
          redirect_to({ to: "/home" })
        } else {
          console.log(error);
        }
      }
      return "";
    }
  };

  useEffect(() => {

    load_card_form(card_basic_type);
  }, []);

  const { attributes, race, rarity, type } = card_options;

  return (
    <div>
      <form
        id="create-card-form"
        onSubmit={async (e) => {
          show_wait_cursor();
          document.getElementById("submit-id").disabled = true;
          e.preventDefault();
          const errlist = {};
          // errlist.push("name")
          // setErrorList(errlist)
          const input = document.getElementsByName("url_img")[0];

          const { data, errors, validator } = Validate_Form_CCARD({
            form_id: e.target.id,
          });
          try {
            await validate_image(input.value);
            errors.url_img = undefined;
          } catch (error) {
            errors.url_img = "Error. Card image invalid!";
          }
          setErrorList(errors);
          document.getElementById("submit-id").disabled = false;
          show_default_cursor();
          // if(){

          // }else{

          // }
          console.log(type);
          console.log(race);
          create_card(data).then(res => {
            const user_confirm = confirm(res.data.msj + "\n" + "Do you want to clear all the inputs?")
            if (user_confirm) {
              window.location.reload()
            }
          }).catch(err => {
            try {
              Object.keys(err.response.data.error).map(er => {
                let txt = ""
                err.response.data.error[er].map(err_txt => txt += err_txt.replace("api_card", "Card"))
                errlist[er] = txt
              })
              setErrorList(errlist)
            } catch (error) {
              console.log(error);
              console.log(err);
            }
          })
        }}
      >
        <div>
          <label id="" className="" htmlFor="">
            CARD NAME
          </label>
          <br />
          <input
            type="text"
            required
            name="name"
            id=""
            className=""
            placeholder="CARD NAME"
          />
          {error_list.name != undefined ? (
            <Error_Message msj={error_list.name}></Error_Message>
          ) : (
            ""
          )}
        </div>

        <br />
        <div>
          <label id="" className="" htmlFor="">
            CARD TYPE
          </label>
          <br />
          <select
            onChange={(e) => {
              const newdata = e.target.value;
              setPendullum(false);
              setLink(false);
              setBasicType(newdata);
              load_card_form(e.target.value);
            }}
            id=""
          >
            <option value="MONSTER">MONSTER</option>
            <option value="SPELLCARD">SPELLCARD</option>
            <option value="TRAP">TRAP</option>
          </select>
          <br />
        </div>

        <div>
          <label id="" className="" htmlFor="">
            CARD IMAGE
          </label>
          <br />
          <input
            // onChange={(e)=>{
            //   try {
            //       document.getElementById("card-preview").src = e.target.value;
            //       document.getElementById("card-preview").onerror=()=>{
            //         document.getElementById("card-preview").src = "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg";
            //       }
            //   } catch (error) {

            //   }
            // }}
            type="text"
            required
            name="url_img"
            id=""
            className=""
            placeholder="URL IMG"
          />
          <br />
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"
            style={{
              width: "25vh",
            }}
            id="card-preview"
            alt=""
          />
          <br />
          <button
            onClick={() => {
              const input = document.getElementsByName("url_img")[0];
              document.getElementById("card-preview").src = input.value;
              document.getElementById("card-preview").onerror = () => {
                document.getElementById("card-preview").src =
                  "https://static.vecteezy.com/system/resources/previews/005/720/408/original/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg";
              };
            }}
            type="button"
          >
            PREVIEW
          </button>
          {error_list.url_img != undefined ? (
            <Error_Message msj={error_list.url_img}></Error_Message>
          ) : (
            ""
          )}
        </div>

        <div>
          <label id="" className="" htmlFor="">
            CARD DESCRIPTION
          </label>
          <br />
          <textarea
            type="text"
            name="card_description"
            id=""
            className=""
            placeholder="Card Description"
          />
          <br />
        </div>

        <Special_Attribute
          data={attributes}
          label={"CARD ATTRIBUTE"}
          name={"attribute"}
        ></Special_Attribute>

        {card_basic_type == "MONSTER" ? (
          <div>
            <div>
              <label id="" className="" htmlFor="">
                STARS/ RANK
              </label>
              <br />
              <select name="stars" id="">
                {create_numeric_options(1, 12)}
              </select>
              <br />
            </div>

            <div>
              <label id="" className="" htmlFor="">
                ATTACK POINTS
              </label>
              <br />
              <input name="card_atk" required type="text" id="" className="" />
              <br />
              {error_list.card_atk != undefined ? (
                <Error_Message msj={error_list.card_atk}></Error_Message>
              ) : (
                ""
              )}
            </div>

            <div>
              <label id="" className="" htmlFor="">
                DEFENSE POINTS
              </label>
              <br />
              <input name="card_def" type="text" id="" className="" />
              <br />
              {error_list.card_def != undefined ? (
                <Error_Message msj={error_list.card_def}></Error_Message>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        <Special_Attribute
          data={race}
          label={"CARD RACE"}
          name={"card_subtype"}
        ></Special_Attribute>
        <Special_Attribute
          data={rarity}
          label={"CARD RARITY"}
          name={"card_rarity"}
        ></Special_Attribute>

        <Special_Attribute
          data={type}
          label={"CARD TYPE"}
          name={"card_type"}
          cb={(e) => {
            const option = type.filter((typ) => typ.id == e.target.value)[0];
            setPendullum(false);
            setLink(false);
            if (option.name.toLowerCase().includes("pendullum")) {
              setPendullum(true);
            } else if (option.name.toLowerCase().includes("link")) {
              setLink(true);
            }
          }}
        ></Special_Attribute>

        {create_link_options(isLink)}
        {create_pendulum_options(isPendulum)}

        <div>
          <label id="" className="" htmlFor="">
            HOW TO OBTAIN IT
          </label>
          <br />
          <input
            name="obtain_method"
            type="text"
            id=""
            className=""
            placeholder="PACKS,METHODS..."
          />
          <br />
        </div>

        <div>
          <label id="" className="" htmlFor="">
            MAX ALLOWED
          </label>
          <br />
          <select name="allowed" className="" id="">
            {create_numeric_options(1, 3)}
          </select>
          <br />
        </div>

        <button type="submit" id="submit-id">
          SEND
        </button>
      </form>
    </div>
  );
}
