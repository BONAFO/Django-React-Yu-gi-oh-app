import { Route, Routes } from "react-router-dom";
import User_Is_Logged from "../Controllers/user_is_logged";
import Create_Card from "../Components/Cards/Create_Card";


export default function Cards_Routes() {

    return <Routes>
        {/* <Route path="/" exact element={<>{window.location.href = "/home"}</>}/> */}
        <Route path="/cards/create-card" exact element={<>
            <User_Is_Logged></User_Is_Logged>
            <Create_Card></Create_Card>
        </>} />

    </Routes>
}