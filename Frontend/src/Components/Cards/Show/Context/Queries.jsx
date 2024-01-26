import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";



export const queryPageContext = createContext();
export const useQueryPageContext = () => { return useContext(queryPageContext) }


const QueryPageContextProvider = ({ children, queries_keys_page, setQueries_keys_page}) => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // // const [queries_keys_page, setQueries_keys_page] = useState({
    // //     paginated: searchParams.get("paginated") || 10,
    // //     page: searchParams.get("page") || 0
    // // });

    return <queryPageContext.Provider value={{ queries_keys_page: queries_keys_page, setQueries_keys_page: setQueries_keys_page }}>{children}</queryPageContext.Provider>
}

export default QueryPageContextProvider