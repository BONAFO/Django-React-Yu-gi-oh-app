import ReactPaginate from "react-paginate"
import { useQueryPageContext } from "./Context/Queries"
import { build_url } from "./Show_Carts"
import { useSearchParams } from "react-router-dom";


export default function Paginator({ maxPages }) {

    const { queries_keys_page } = useQueryPageContext()
    const [searchParams, setSearchParams] = useSearchParams();


    // queries_keys_page.page = parseInt(e.target.value)
    return <div>
        <ReactPaginate
            nextLabel="Next >"
            initialPage	={parseInt(queries_keys_page.page)}
            onClick={(e)=>{
                
                const queries = []
                queries_keys_page.page = parseInt(e.nextSelectedPage) || 0
                Object.keys(queries_keys_page).map(key => {
                    queries.push(`${key}=${queries_keys_page[key]}`)
                })

                const url = build_url(queries)
         
                window.location.href = url

         
            }}
            pageCount={maxPages}
            previousLabel="< Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />



    </div>
}

