import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login";
import SignUp from "../Components/Home/SignUp";

export default function Home_Routes() {

    return <Routes>
        {/* <Route path="/" exact element={<>{window.location.href = "/home"}</>}/> */}
        <Route path="/home" exact element={<><Home></Home></>}/>
        <Route path="/login" exact element={<><Login></Login></>}/>
        <Route path="/signup" exact element={<><SignUp></SignUp></>}/>
    </Routes>
}