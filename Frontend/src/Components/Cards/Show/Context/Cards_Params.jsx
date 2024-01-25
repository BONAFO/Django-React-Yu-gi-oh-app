import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";



export const cardParamsContext = createContext();
export const useCardParamsContext = () => { return useContext(cardParamsContext) }


const CardParamsContextProvider = ({ children, params }) => {



    return <cardParamsContext.Provider value={{ params : params }}>{children}</cardParamsContext.Provider>
}

export default CardParamsContextProvider