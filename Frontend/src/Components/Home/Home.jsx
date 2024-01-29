import { useEffect, useState } from "react"
import { user_is_logged } from "../../Controllers/user_is_logged"

export default function Home() {


    const [user_logged, setUser_logged] = useState(false)
    useEffect(() => {

        user_is_logged().then(res => { setUser_logged(res) }).catch(err => { console.log(err); })


    }, []);
    return <div>
        <a rel="stylesheet" href="/cards/create-card" >CREATE CARD</a>
        <br />
        <a href="/cards/show-cards">SHOW CARDS</a>
        <br />
        {(user_logged) ? ("THIS IS MY HOME!!") : (<>
            <a href="/login">LOGIN</a>
            <br />
            "BUEN DIA EXTRAÑO"
        </>)}
    </div>
}