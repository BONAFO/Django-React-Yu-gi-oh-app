export const validator_dispacher = (data = {}) => {
    const msj = {
        bool: false,
        txt: "",
        data: {},
    };


    switch (Object.keys(data)[0]) {
        case "name":

            const validator = clean_and_validate_text_data({ data: data, required: true });
            if (validator.bool) {
                msj.bool = validator.bool;
                msj.data = validator.data;
            }
            msj.txt = validator.txt;
            // msj.data[Object.keys(data)[0]] =
            break;
        case "attribute":
        case "card_subtype":
        case "card_rarity":
        case "card_type":
        case "card_link":
        case "pendulum_scales":
        case "allowed":
            
            
            


        case "stars":
            
            msj.bool = true;
            msj.data = parseInt(data[Object.keys(data)[0]]);
            break;
        default:
            msj.bool = true;
            msj.data = data[Object.keys(data)[0]];

            break
        case "card_atk":
        case "card_def":
            const validations = validate_atkdef(data[Object.keys(data)[0]]);
            msj.data = validations
            if (!isNaN(validations) || typeof validations == "string") {

                msj.bool = true;
            } else {
                msj.txt = "Error.Both, ATK and DEF must be a number or have X or ? symbol";
            }
            break

    }

    return msj;
};

const clean_and_validate_text_data = ({ required = false, data = {} }) => {
    const msj = {
        bool: true,
        txt: "",
        data: {},
    };
    const key = Object.keys(data)[0];
    let value = data[key];

    value = value.trim();

    if (value.length === 0) {
        msj.bool &= false;
    }

    const workds = value.split(" ");

    value = "";

    workds.map((w) => {
        value += w.charAt(0).toUpperCase() + w.substring(1, w.length) + " ";
    });

    // if (!required) {
    //     msj.bool = true
    //     msj.data = ""
    // }else{

    // }

    if (required) {
        if (!msj.bool) {
            msj.txt =
                "Error! You must provide a " +
                `[${key.charAt(0).toUpperCase() + key.substring(1, key.length)}]` +
                " valid.";
        }
        msj.data = value.trim();
    } else {
        if (msj.bool) {
            msj.data = value.trim();
        } else {
            msj.data = "";
        }
        msj.bool = true;
    }

    return msj;
};


export const validate_image = async (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve("asd")
        img.onerror = (e) => reject(e)
        img.src = url
    })

}

const validate_atkdef = (value = "") => {
    const symbols = "x?".split('');
    // if(value.includes){

    // }
    let validator = false;

    symbols.map(s => (value.toLowerCase().includes(s)) ? (validator = true) : (''))
    if (validator) {
        return value
    } else {
        return parseInt(value)
    }
}

// validate_image("https://www.magiclair.com.ar/cdn/shop/products/06042775-8ea3-59bf-8464-34b60da0065b_9f62cdf3-57c2-42ac-9809-1888de6bf068_800x.png?v=1675949834").then(res => { console.log(1,res) }).catch(err => { console.log(2,err) })
// validate_image("adijhahsdasd").then(res => { console.log(1,res) }).catch(err => { console.log(3,err) })

