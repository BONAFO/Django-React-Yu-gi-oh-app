import { useResponsiveContext } from "../../../../../Context/IsMobile";

export default function Card_Allowed({ card_allowed }) {

    const respo = useResponsiveContext();

    return <div className={`allowed-cont-${respo}`}>
        <h2 className={`allowed-tag-${respo}`}>ALLOWED: {card_allowed}</h2>
        <br />
    </div>
}