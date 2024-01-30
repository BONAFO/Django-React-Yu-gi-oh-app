import { useResponsiveContext } from "../../../../../Context/IsMobile";
import { capitalizate } from "../../../Show/Controllers/Capitalize";

const identify_pack = (method) => {
    method = method.toLowerCase();
    if (method.includes("box") || method.includes("pack")) {
        method = method.replace("box", "")
        method = method.replace("pack", "")
        method = capitalizate(method)
        method += " [Box]"
    } else if (method.includes("deck")) {
        method = method.replace("deck", "")
        method = method.replace("starter", "")
        method = capitalizate(method)
        method += " [Deck]"
    } else {
        method = capitalizate(method)
    }
    return method
}
const create_packs_list = (methods,respo) => {
    const methods_arr = methods.split(",");
    const elements = [];
    methods_arr.map((data,i) => {
        elements.push(
            <li key={"c-pack-" +i}>
                <label
                    className={`points-lab-${respo} pack-txt-${respo}`}
                    htmlFor=""
                >
                    {identify_pack(data)}
                </label>
            </li>
        )
    })

    if (elements.length == 0) {
        return elements
    }
    return <div className={`star-cont-${respo}`}>
        {elements}
        <br />
    </div>;


}






export default function Card_Pack({ obtain_method}) {
    const respo = useResponsiveContext();
    return <div>
        <ul className="packlist">
            {create_packs_list(obtain_method, respo)}
        </ul>

    </div>
}