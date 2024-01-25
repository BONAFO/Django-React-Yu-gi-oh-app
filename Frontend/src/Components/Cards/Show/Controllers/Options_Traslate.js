import { capitalizate } from "./Capitalize";



export const card_type_traslate = (element) => {
    element.name = element.name.replace("m-", "monster ");
    element.name = element.name.replace("e-", "extra deck monster ");
    if (element.name == "t") {
        element.name = "trap";
    }

    if (element.name == "s") {
        element.name = "spell";
    }

    element.name = capitalizate(element.name);
    return <option value={element.id}>{element.name}</option>;
};

export const get_id_by_filter = (name, arr) => {
    let id = arr.filter((ar) => ar.name == name)[0];
    if (id == undefined) {
        return -1;
    } else {
        return id.id;
    }
};