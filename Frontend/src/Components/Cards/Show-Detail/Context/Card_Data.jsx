import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";



export const cardDataContext = createContext();
export const useCardDataContext = () => { return useContext(cardDataContext) }


const CardDataContextProvider = ({ children, card_data }) => {



    return <cardDataContext.Provider value={{ card_data : card_data }}>{children}</cardDataContext.Provider>
}

export default CardDataContextProvider