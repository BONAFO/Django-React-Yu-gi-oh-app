import { createContext, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";



export const cardContHeightContext = createContext();
export const useCardContHeightContext = () => { return useContext(cardContHeightContext) }


const CardContHeightContextProvider = ({ children }) => {

    const [height,setHeight] = useState(500);

    return <cardContHeightContext.Provider value={{ height : height, setHeight:setHeight }}>{children}</cardContHeightContext.Provider>
}

export default CardContHeightContextProvider