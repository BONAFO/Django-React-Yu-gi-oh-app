import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";



export const filterContext = createContext();
export const useFilterContext = () => { return useContext(filterContext) }


const FilterContextProvider = ({ children, filter, mod_filter }) => {



    return <filterContext.Provider value={{ filter: filter, mod_filter: mod_filter }}>{children}</filterContext.Provider>
}

export default FilterContextProvider