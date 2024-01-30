import { createContext, useContext, useState } from "react";



// export const responsiveContext = createContext();
// export const useResponsiveContext = () => { useContext(responsiveContext) }


// const CreateResponseContextProvider = ({ children }) => {
//     const [respomode, setResponsive] = useState((window.innerWidth > 600) ? ("desk") : ("mobile"));

//     window.onresize = () => {
//         (window.innerWidth > 600) ? setResponsive("desk") : setResponsive("mobile")
//     }

//     return <responsiveContext.Provider value={1}>{children}</responsiveContext.Provider>
// }

// export default CreateResponseContextProvider

export const responsiveContext = createContext();
export const useResponsiveContext = () => useContext(responsiveContext)

const CreateResponseContextProvider = ({ children }) => {
    const [respomode, setResponsive] = useState((window.innerWidth > 900) ? ("desk") : ("mob"));

    window.onresize = () => {
        (window.innerWidth > 900) ? setResponsive("desk") : setResponsive("mob")
    }


    return <responsiveContext.Provider value={respomode}>{children}</responsiveContext.Provider>

}

export default CreateResponseContextProvider