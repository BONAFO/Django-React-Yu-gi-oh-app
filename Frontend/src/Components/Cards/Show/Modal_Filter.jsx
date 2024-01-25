
import Filters_Container from "./Filters_Container";
import FilterContextProvider from "./Context/Filter";
import CardTypeFilterContextProvider from "./Context/Type_Card_Filter";
import CardParamsContextProvider from "./Context/Cards_Params";

const clear_filters = (filters) => {
    const spells_trap_id = [
        get_id_by_filter("Spell", params.type),
        get_id_by_filter("Trap", params.type),
    ];
    const special_monster = [
        get_id_by_filter("Monster Link", params.type),
        get_id_by_filter("Monster Pendullum", params.type),
    ];

    // if(filters.card_type != undefined){
    //     if(spells_trap_id.indexOf(parseInt(filters.card_type))){

    //     }else if(spells_trap_id.indexOf(parseInt(filters.card_type))){

    //     }else if(spells_trap_id){

    //     }else{

    //     }
    // }

    // Spell Card
    if (spells_trap_id[0] == filters.card_type) {
    } else if (spells_trap_id[1] == filters.card_type) {
        console.log(2);
    } else if (special_monster[0] == filters.card_type) {
        console.log(3);
    } else if (special_monster[1] == filters.card_type) {
        console.log(4);
    } else {
        console.log(5);
    }
};

export default function Modal_Filter({ setModal, params }) {
    const filters = {};

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
                            clear_filters(filters);
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
