
import Filters_Container from "./Filters_Container";
import FilterContextProvider from "./Context/Filter";
import CardTypeFilterContextProvider from "./Context/Type_Card_Filter";
import CardParamsContextProvider from "./Context/Cards_Params";
import { build_url } from "./Show_Carts";
import { useQueryPageContext } from "./Context/Queries";
import { get_queries } from "./Controllers/Traslate_query";

// HEAD FOR EVERY FILTER QUERY
const filter_head = "f__";

export default function Modal_Filter({ setModal, params }) {
    const filters = {};

    const { queries_keys_page } = useQueryPageContext()


    const mod_filters = ({ param, extras = {} }) => {
        switch (param) {
            case "add":
                break;

            case "delete":
                break;

            case "update":
                break;

            case "get":
                break;
        }
    };

    const get_id_by_filter = (name, arr) => {
        let id = arr.filter((ar) => ar.name == name)[0];
        if (id == undefined) {
            return -1;
        } else {
            return id.id;
        }
    };

    return (
        <div className="modal-cont">
            <button
                onClick={async () => {
                    setModal("");
                }}
            >
                X
            </button>

            <div>
                <div style={{ color: "white" }}>

                    <CardParamsContextProvider params={params}>
                        <CardTypeFilterContextProvider>
                            <FilterContextProvider filter={filters} mod_filter={mod_filters}>
                                <Filters_Container></Filters_Container>
                            </FilterContextProvider>
                        </CardTypeFilterContextProvider>
                    </CardParamsContextProvider>


                    <br />



                    <button
                        onClick={() => {
                            let queries = [];
                            
                            // queries = match_queries({
                            //     card_link_max
                            //         :
                            //         "4",
                            //     card_link_min
                            //         :
                            //         "1",
                            //     card_type
                            //         :
                            //         "3",
                            // });

                            // let f = {
                            //     card_link_max
                            //         :
                            //         "4",
                            //     card_link_min
                            //         :
                            //         "1",
                            //     card_type
                            //         :
                            //         "3",
                            // };
                            Object.keys(queries_keys_page).map(key => {
                                if (key !== "page" && !key.includes(filter_head)) {
                                    queries.push(`${key}=${queries_keys_page[key]}`)
                                }
                            })
                            Object.keys(filters).map(key => {
                                queries.push(`${filter_head}${key}=${filters[key]}`)
                            })

                            const url = build_url(queries);
                            window.location.href = url;
                            // console.log(url);

                            // //SIMULANDO

                            // let raw_queries = url;
                            // let start_queries = {};

                            // raw_queries = raw_queries.replace(window.origin, "");
                            // raw_queries = raw_queries.replace(window.location.pathname, "");
                            // raw_queries = raw_queries.replace("?", "");
                            // raw_queries = raw_queries.split("&")
                            // raw_queries = raw_queries.map(q => q.split("="));
                            // raw_queries.map(q => {
                            //     if (q[0] !== "") {
                            //         start_queries[q[0]] = q[1].trim()
                            //     }
                            // })

                          
                            // f = {
                            //     stars_max
                            //         :
                            //         "5",
                            //     stars_min
                            //         :
                            //         "3",
                            //     attribute
                            //         :
                            //         "22",
                            // };
                            // queries =[]
                            // Object.keys(start_queries).map(key => {
                            //     if (key !== "page" && !key.includes(filter_head)) {
                            //         queries.push(`${key}=${start_queries[key]}`)
                            //     }
                            // })
                            // Object.keys(f).map(key => {
                            //     queries.push(`${filter_head}${key}=${f[key]}`)
                            // })

                            // const url2 = build_url(queries);
                            // console.log("url2",url2);

                            // build_filter_query()
                            // clear_filters(filters);
                        }}
                    >
                        APPLY FILTERS
                    </button>
                    <button
                        onClick={async () => {
                            setModal("");
                        }}
                    >
                        CANCEL
                    </button>
                    {/*             
                <input type="number" placeholder="Min Starts/Ranks" />
                <input type="number" placeholder="Max Starts/Ranks" /> */}
                </div>
            </div>
        </div>
    );
}
// const spells_trap_id = [get_id_by_filter("Spell", params.type), get_id_by_filter("Trap", params.type)];
// const special_monster = [get_id_by_filter("Monster Link", params.type), get_id_by_filter("Monster Pendullum", params.type)];
