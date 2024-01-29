import { Route, Routes } from "react-router-dom";
import User_Is_Logged from "../Controllers/user_is_logged";
import Create_Card from "../Components/Cards/Create/Create_Card";
import SignUp from "../Components/Home/SignUp";
import CreateCardContextProvider from "../Context/Create_Cart_Context";
import Show_Carts from "../Components/Cards/Show/Show_Carts";
import Show_Card_Detail from "../Components/Cards/Show-Detail/Card_Detail";


export default function Cards_Routes() {
    return <Routes>
        {/* <Route path="/" exact element={<>{window.location.href = "/home"}</>}/> */}
        <Route path="/cards/create-card" exact element={<>
            <CreateCardContextProvider>
                <Create_Card></Create_Card>
            </CreateCardContextProvider>
        </>} />
        <Route path="/cards/show-cards" exact element={<>
            <Show_Carts></Show_Carts>
        </>} />
        <Route path="/cards/card/" exact element={<>
            <Show_Card_Detail></Show_Card_Detail>
        </>} />
    </Routes>
}


