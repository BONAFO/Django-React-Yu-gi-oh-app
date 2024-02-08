
import Filters_Container from "./Filters_Container";
import FilterContextProvider from "./Context/Filter";
import CardTypeFilterContextProvider from "./Context/Type_Card_Filter";
import CardParamsContextProvider from "./Context/Cards_Params";
import { build_url } from "./Show_Carts";
import { useQueryPageContext } from "./Context/Queries";
import { get_queries } from "./Controllers/Traslate_query";
import { useResponsiveContext } from "../../../Context/IsMobile";

// HEAD FOR EVERY FILTER QUERY
const filter_head = "f__";

export default function Modal_Filter({ setModal, params }) {
    const filters = {};
    const respo = useResponsiveContext()

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
                className={`modal-btn-${respo} close-btn close-btn-${respo}`}
                onClick={async () => {
                    document.getElementById("modal-filter").style.opacity = 0;
                    setTimeout(() => {
                        setModal("");
                    }, 500);
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
                    className={`modal-btn-${respo} modal-btn-bigbtn-${respo}`}
                        onClick={() => {
                            let queries = [];
                            const exceptions_filter =[ `${filter_head}text`];
                 
                            Object.keys(queries_keys_page).map(key => {
                                if (key !== "page" && (!key.includes(filter_head)) ) {
                                    queries.push(`${key}=${queries_keys_page[key]}`)
                                }else if (exceptions_filter.indexOf(key) !== -1){
                                    queries.push(`${key}=${queries_keys_page[key]}`)
                                }
                            })
                            

                            Object.keys(filters).map(key => {
                                queries.push(`${filter_head}${key}=${filters[key]}`)
                            })
                            const url = build_url(queries);
                            window.location.href = url;
                       
                        }}
                    >
                        APPLY FILTERS
                    </button>
                    <button
                    className={`modal-btn-${respo} close-btn close-btn-${respo}  modal-btn-bigbtn-${respo}`}
                        onClick={async () => {
                            document.getElementById("modal-filter").style.opacity = 0;
                            setTimeout(() => {
                                setModal("");
                            }, 500);
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
