


const create_number_options = (min, max) => {
    const elements = []
    for (let i = min; i <= max; i++) {
        if (i != 0) {
            if (i == -1) {
                elements.push(<option value={i}>{"Any"}</option>)
            } else {
                elements.push(<option value={i}>{i}</option>)
            }
        }

    }
    return elements
}

const capitalizate =(element)=>{



    let newWord = "";
    element.split(" ").map(word => {
        try {
            newWord += word[0].toUpperCase() + word.substring(1, word.length) + " "
        } catch (error) {
            
        }
    })

    newWord = newWord.trim()
    return newWord
}

const card_type_traslate =(element)=>{

    element.name = element.name.replace("m-", "monster ")
    element.name = element.name.replace("e-", "extra deck monster ")
    if(element.name == "t"){element.name = "trap"}
   
    if(element.name == "s"){element.name = "spell"}
    

    element.name = capitalizate(element.name)
    return <option value={element.id}>{element.name}</option>
}


const create_arr_options = (arr, cb) => {
    const elements = []
    arr.sort()
    for (let i = 0; i < arr.length; i++) {

        if(cb !== undefined){
            elements.push(cb(arr[i]))
        }else{
            elements.push(<option value={arr[i].id}>{capitalizate(arr[i].name)}</option>)
        }

        // if (i != 0) {
        //     if (i == -1) {
        //         elements.push(<option value={i}>{"Any"}</option>)
        //     } else {
        //         elements.push(<option value={i}>{i}</option>)
        //     }
        // }

    }
    return elements
}

export default function Modal_Filter({ setModal, params }) {


    return <div className="modal-cont">
        <button onClick={async () => { setModal("") }}>X</button>


        <div>
            <div style={{ color: "white" }}>
                <label htmlFor="">Min Starts/Ranks</label>
                <select name="level_min" id="">
                    {create_number_options(-1, 12)}
                </select>
                <label htmlFor="">Max Starts/Ranks</label>
                <select name="level_max" id="">
                    {create_number_options(-1, 12)}
                </select>
                <label htmlFor="">Allowed</label>
                <select name="allowed" id="">
                    {create_number_options(-1, 3)}
                </select>


                <br />
                <label htmlFor="">Link Rank</label>
                <select name="allowed" id="">
                    {create_number_options(-1, 6)}
                </select>
                <label htmlFor="">Pendulum Scale</label>
                <select name="allowed" id="">
                    {create_number_options(-1, 12)}
                </select>
                <label htmlFor="">Rarity</label>
                <select name="allowed" id="">
                    {create_arr_options(params.rarity)}
                </select>
                <br />
                <label htmlFor="">Attribute</label>
                <select name="allowed" id="">
                    {create_arr_options(params.attributes)}
                </select>
                <label htmlFor="">Card type</label>
                <select name="type" id="">
                    {create_arr_options(params.type, card_type_traslate)}
                </select>
                <label htmlFor="">Card Race</label>
                <select name="race" id="">
                    {create_arr_options(params.sub_type)}
                </select>
                {/*             
                <input type="number" placeholder="Min Starts/Ranks" />
                <input type="number" placeholder="Max Starts/Ranks" /> */}
            </div>
        </div>
    </div>
}