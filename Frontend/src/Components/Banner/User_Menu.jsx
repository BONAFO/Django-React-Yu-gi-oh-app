import { useResponsiveContext } from "../../Context/IsMobile"

export default function User_Menu(){

    const respo = useResponsiveContext()
    return <div>
        <div className={`user-icon-cont-${respo}`}>
            <img className={`user-icon-${respo}`} src="https://www.anmosugoi.com/wp-content/uploads/2023/09/Date-a-Live-Kurumi-Tokisaki-min-1.webp" alt="" />
        </div>
    </div>
}