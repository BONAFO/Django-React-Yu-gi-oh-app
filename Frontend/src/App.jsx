
import axios from "axios"
import { useEffect } from "react";
import { BrowserRouter, redirect } from "react-router-dom";
import Home_Routes from "./Routes/home.routes";
import Cards_Routes from "./Routes/cards.routes";
import CreateResponseContextProvider from "./Context/IsMobile";

// http://localhost:4000/api/v1/users/

const get_home = async () => {
    const response = await axios.get(process.env.REACT_APP_SERVER_PROD + "users/14");
    console.log(response);
}

const post_home = async () => {
    const response = await axios.post(process.env.REACT_APP_SERVER_PROD + "users/", ({
        "username": "perrito",
        "password": "perrito",
        "email": "perrito@gmail.com",
    }));
    console.log(response);
}

const put_home = async () => {
    const response = await axios.put(process.env.REACT_APP_SERVER_PROD + "users/", ({
        "username": "perrito",
        "password": "perrito",
        "email": "perrito@gmail.com",
    }));
    console.log(response);
}

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // manejar respuesta exitosa
//     console.log(response);
//   })
//   .catch(function (error) {
//     // manejar error
//     console.log(error);
//   })
//   .finally(function () {
//     // siempre sera executado
//   })

export const redirect_to = ({ from, to }) => {
    if (from !== undefined) {
        if (window.location.pathname === from) {
            window.location.href = to;
        }
    } else {
        window.location.href = window.origin + to;
    }
}

export default function App() {
    // useEffect(() => {
    //     get_home()
    //     // post_home()
    //     // put_home()
    // }, [])

    redirect_to({
        from: "/", to: '/home'
    })


    return <div>
        <div id="subbody"></div>
        <CreateResponseContextProvider>
            <BrowserRouter>
                <Home_Routes></Home_Routes>
                <Cards_Routes></Cards_Routes>
            </BrowserRouter>
        </CreateResponseContextProvider>
    </div>
}

