import { useEffect, useState } from "react"
import { get_cards } from "../../../Controllers/Cards/Show/axios.calls"
import Cards from "./Cards"
import Cards_Filter from "./Filter"



let paginated_by = 10

export const setPaginated = (value) => {
    paginated_by = value
}
export const getPaginated = () => {
    return paginated_by
}



export default function Show_Carts() {

    const [paginate_reload, setPaginated_reload] = useState(false)
    const [actual_page, setActual_page] = useState(1)
    const [cards, setCards] = useState("")

    const update_cards = () => {
        let queries = [`paginated=${paginated_by}`, `page=${actual_page - 1}`]
        get_cards(queries).then(res => setCards(<Cards cards={res.data}></Cards>)).catch(err => console.log(err))
    }

    useEffect(() => {
        update_cards()

    }, [])

    return <div>
        <div>
            <select name="paginated" onChange={(e) => {
                paginated_by = parseInt(e.target.value)
                update_cards()
            }} id="">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>

            </select>

            <Cards_Filter></Cards_Filter>
        </div>
        <br />

        {cards}
    </div>
}