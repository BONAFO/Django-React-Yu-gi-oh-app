import { capitalizate } from "./Capitalize";

export const create_number_options = (min, max) => {
    const elements = [];
    for (let i = min; i <= max; i++) {
        if (i != 0) {
            if (i == -1) {
                elements.push(<option value={i}>{"Any"}</option>);
            } else {
                elements.push(<option value={i}>{i}</option>);
            }
        }
    }
    return elements;
};


export const create_arr_options = ({arr, cb, extra}) => {
    const elements = [];
    arr.sort();
    elements.push(<option value={-1}>{"Any"}</option>)
    for (let i = 0; i < arr.length; i++) {
        if (cb !== undefined) {
            elements.push(cb(arr[i],extra));
        } else {
            elements.push(
                <option value={arr[i].id}>{capitalizate(arr[i].name)}</option>
            );
        }

        // if (i != 0) {
        //     if (i == -1) {
        //         elements.push(<option value={i}>{"Any"}</option>)
        //     } else {
        //         elements.push(<option value={i}>{i}</option>)
        //     }
        // }
    }
    return elements;
};

