import { createContext, useContext, useState } from "react";



export const cardContext = createContext();
export const useCCardContext = () => { useContext(cardContext) }


const CreateCardContextProvider = ({ children }) => {
    const [new_card, createCard] = useState({});


    return <cardContext.Provider value={{ new_card: new_card, createCard: createCard }}>{children}</cardContext.Provider>
}

export default CreateCardContextProvider