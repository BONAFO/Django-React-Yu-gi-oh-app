import { useEffect, useState } from "react"
import { get_cards } from "../../../Controllers/Cards/Show/axios.calls"
import Cards from "./Cards"
import Cards_Filter from "./Filter"
import { useSearchParams } from "react-router-dom"
import Cards_Sort from "./Sort"
import Paginator from "./Paginator"
import QueryPageContextProvider from "./Context/Queries"
import { get_queries } from "./Controllers/Traslate_query"
import Nav_Component from "../../Nav/Nav_Container"
import { useResponsiveContext } from "../../../Context/IsMobile"



// let paginated_by = 10

// export const setPaginated = (value) => {
//     paginated_by = value
// }
// export const getPaginated = () => {
//     return paginated_by
// }









export const build_url = (queries) => {

    let q = "?"

    queries.map((query, i) => {
        (i != queries.length - 1) ? (q += query + "&") : (q += query)
    })

    return window.location.origin + window.location.pathname + q;
}


export default function Show_Carts() {

    // const [paginate_reload, setPaginated_reload] = useState(false)
    // const [actual_page, setActual_page] = useState(1)


    //    const queries_keys_page = {
    //         paginated: 10,
    //         page: 0
    //     };

    const [cards, setCards] = useState("")
    const [maxPages, setMaxPages] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();
    // ARR WITH ALL THE POSIBLES QUERIES KEY
    // const [queries_keys_page, setQueries_keys_page] = useState({
    //     paginated: searchParams.get("paginated") || 10,
    //     page: searchParams.get("page") || 0,
    //     order_by : searchParams.get("order_by") || undefined,
    // });
    const respo = useResponsiveContext()
    const [queries_keys_page, setQueries_keys_page] = useState(get_queries());

    // const update_cards = () => {

    //     get_cards(queries).then(res => setCards(<Cards cards={res.data}></Cards>)).catch(err => console.log(err))
    // }

    useEffect(() => {
        const queries = [];
        // queries.push(`paginated=${searchParams.get("paginated") || 10}`)
        // queries_keys_page.map(query => queries.push(`${query.name}=${searchParams.get(query.name) || query.defaut}`))



       

        Object.keys(queries_keys_page).map(key => {
            queries.push(`${key}=${searchParams.get(key) || queries_keys_page[key]}`)
        })


        // let queries = [`paginated=${paginated_by}`, `page=${actual_page - 1}`]
        get_cards(queries).then(res => {
            let max_pages = parseInt(res.max )/ (parseInt(searchParams.get("paginated"))|| 10);

            max_pages = (max_pages.toString().includes(".")) ? (Math.floor(max_pages) + 1) : (Math.floor(max_pages));
            setMaxPages(max_pages)
            setCards(<Cards cards={res.data}></Cards>)
        }).catch(err => console.log(err))
    }, [])

    return <div>

<nav>
    <Nav_Component text={"Home"} url={window.origin}></Nav_Component>
    </nav>

        <div>
            <label className={`selector-label-start-${respo} selector-label-${respo}`} htmlFor="">DISPLAY</label>
            <select name="paginated" 
            className={`selector-btn-${respo}`} 
            value={searchParams.get("paginated") || 10} onChange={(e) => {
                const queries = []



                queries_keys_page.paginated = parseInt(e.target.value)
                Object.keys(queries_keys_page).map(key => {
    
                  if(key != "page"){
                        queries.push(`${key}=${queries_keys_page[key]}`)
                    }
                })

                const url = build_url(queries)
                window.location.href = url

            }} id="">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>

            </select>
            <label className={`selector-label-end-${respo} selector-label-${respo}`} htmlFor="">ELEMENTS</label>
            <QueryPageContextProvider queries_keys_page={queries_keys_page} setQueries_keys_page={setQueries_keys_page}>
                <Cards_Sort></Cards_Sort>
                <Cards_Filter></Cards_Filter>
            </QueryPageContextProvider>

        </div>
        <br />

        {cards}




        <QueryPageContextProvider queries_keys_page={queries_keys_page} setQueries_keys_page={setQueries_keys_page}>
            <Paginator maxPages={maxPages}></Paginator>
        </QueryPageContextProvider>


    </div>
}