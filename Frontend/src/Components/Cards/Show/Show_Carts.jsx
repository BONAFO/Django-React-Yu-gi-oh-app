import { useEffect, useState } from "react"
import { get_cards } from "../../../Controllers/Cards/Show/axios.calls"



let paginated_by = 10
export default function Show_Carts() {

    const [paginate_reload, setPaginated_reload] = useState(false)
    const [actual_page, setActual_page] = useState(1)
    
    
    useEffect(() => {
        let queries = [`paginated=${paginated_by}`, `page=${actual_page -1 }`]
        get_cards(queries)
    }, [])
    return <div>
        <select name="paginated" onChange={(e) => {
            paginated_by = parseInt( e.target.value)
            setPaginated_reload(!paginate_reload)
        }} id="">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>

        </select>
    </div>
}