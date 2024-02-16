import { useEffect, useState } from "react"
import { user_is_logged } from "../../Controllers/user_is_logged"
import { useResponsiveContext } from "../../Context/IsMobile";
import { has_perms } from "../../Controllers/Home/axios.call";

export default function Home() {
    const respo = useResponsiveContext();

    const [user_logged, setUser_logged] = useState(false);
    useEffect(() => {

        has_perms();
        
    }, []);
  


    return <div>
        <div className={`separator-bean-${respo}`}>
            <div
                onClick={() => {
                    window.location.href = "/cards/create-card";
                }}
                className={`section-cont-${respo} section-cont-create-card`}>

            </div>
        </div>

        <div className={`separator-bean-${respo}`}>

            <div
                onClick={() => {
                    window.location.href = "/cards/show-cards";
                }}
                className={`section-cont-${respo} section-cont-show-cards`}>

            </div>

        </div>
        <div className={`separator-bean-${respo}`}>
            <div
                onClick={() => {
                    window.location.href = "/cards/show-cards";
                }}
                className={`section-cont-${respo} section-cont-create-desk`}>

            </div>
        </div>
    </div>
}

