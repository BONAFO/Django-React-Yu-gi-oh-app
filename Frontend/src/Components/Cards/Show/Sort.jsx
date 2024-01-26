import { useSearchParams } from "react-router-dom";
import { useQueryPageContext } from "./Context/Queries";
import { build_url } from "./Show_Carts";


export default function Cards_Sort() {

    const { queries_keys_page } = useQueryPageContext()
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <label htmlFor="">SORT</label>
            <select name="sort" value={queries_keys_page.order_by || "name"}  id="" onChange={(e) => {
                const queries = [];
                if(queries_keys_page["paginated"] !== undefined){
                    queries.push(`${"paginated"}=${queries_keys_page["paginated"]}`)
                }
                // FALTA OBTENER LOS FILTROS
                // order = get_sort_query(parseInt(e.target.value), order)
                let order = e.target.value;
                queries.push(`order_by=${order}`)
                const url = build_url(queries)
               window.location.href = url;
   
            }}>
                <option value={"name"}>Alphabetically</option>
                <option value={"card_type"}>Card Type</option>
                <option value={"-stars"}>Stars / Ranks (+ / -)</option>
                <option value={"stars"}>Stars / Ranks (- / +)</option>
                <option value={"-card_link"}>Link (+ / -)</option>
                <option value={"card_link"}>Link (- / +)</option>
                <option value={"-pendulum_scales"}>Pendulum Scales (+ / -)</option>
                <option value={"pendulum_scales"}>Pendulum Scales (- / +)</option>
                <option value={"-card_atk"}>ATK (+ / -)</option>
                <option value={"card_atk"}>ATK (- / +)</option>
                <option value={"-card_def"}>DEF (+ / -)</option>
                <option value={"card_def"}>DEF (- / +)</option>
                <option value={"-card_rarity"}>Rarity (+ / -)</option>
                <option value={"card_rarity"}>Rarity (- / +)</option>
                <option value={"attribute"}>Attribute</option>
                <option value={"card_subtype"}>Race</option>

            </select>
        </div>
    );
}
