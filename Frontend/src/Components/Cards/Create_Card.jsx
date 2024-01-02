import { useState } from "react"
import { get_card_atributte } from "../../Controllers/Cards/axios.call";

export default function Create_Card() {


  // useEffect(async () => {
  //   const model =  await get_card_model()
  //   console.log(model);
  // }, [])

  const [new_card, setCardData] = useState({
    card_basic_type: "MONSTER"
  });

  const load_card_form = () => {
    const [attributes, setAttr] = useState([]);
    switch (new_card.card_basic_type) {
      case "MONSTER":
        
        get_card_atributte()
        .then(res => {
          setAttr(res.data.data)
        })
        .catch(err => {
          console.log(err);
        })
      // const attributes = await get_card_atributte();
      // console.log(attributes);
        return <div>
          <div>
          <label id="" className="" htmlFor="">CARD ATTRIBUTE</label>
          <br />
          <select name="att" id="">
          {attributes.map(att => <option value={att.id}>{att.name}</option>)}
          </select>
          </div>
          
        </div>
      case "SPELLCARD":
        return <div>

        </div>
      case "TRAP":
        return <div>

        </div>




    }
  }

  return <div>
    <form action="">
    <div>
      <label id="" className="" htmlFor="">CARD NAME</label>
      <br />
      <input type="text" name="name" id="" className="" placeholder="CARD NAME" />
    </div>
    <br />
    <div>
      <label id="" className="" htmlFor="">CARD TYPE</label>
      <br />
      <select onChange={(e) => {
        const newdata = JSON.parse(JSON.stringify(new_card));
        newdata.card_basic_type = e.target.value;
        setCardData(newdata)
      }} name="" id="">
        <option value="MONSTER">MONSTER</option>
        <option value="SPELLCARD">SPELLCARD</option>
        <option value="TRAP">TRAP</option>
      </select>
    </div>
    <div>
      {load_card_form()}
    </div>
    </form>
  </div>
}