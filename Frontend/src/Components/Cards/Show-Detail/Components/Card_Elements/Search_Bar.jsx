import { useResponsiveContext } from "../../../../../Context/IsMobile"
import { useQueryPageContext } from "../../../Show/Context/Queries"
import { build_url } from "../../../Show/Show_Carts"

export default function Search_Bar(){
    const { queries_keys_page , setQueries_keys_page } = useQueryPageContext()
    const respo = useResponsiveContext()
    return <div>
        <br />
        <form action="" onSubmit={(e)=>{
            e.preventDefault()

            let queries = [];

            const filter_head = "f__";
            Object.keys(queries_keys_page).map(key => {
                if (key !== "page" && !key.includes(filter_head + "text")) {
                    queries.push(`${key}=${queries_keys_page[key]}`)
                }
            })

            const card_text = document.getElementById("card_text").value;
            queries.push(filter_head + "text=" +  card_text)
            
            const url = build_url(queries);
            window.location.href = url;
            // Object.keys(filters).map(key => {
            //     queries.push(`${filter_head}${key}=${filters[key]}`)
            // })


        }} method="post">
            <input className={`search-input-${respo}`} type="text" id="card_text" placeholder="TEXT SEARCH"/>
            <input className={`search-submit-${respo}`} type="submit" value={"SEARCH"}/>
        </form>
    </div>
}