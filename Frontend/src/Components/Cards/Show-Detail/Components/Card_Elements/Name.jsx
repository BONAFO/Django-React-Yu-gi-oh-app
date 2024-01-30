import { useResponsiveContext } from "../../../../../Context/IsMobile";

export default function Card_Name({ card_name }) {

    const respo = useResponsiveContext();

    return <div className={`name-cont-${respo}`}>
        <h2 className={`name-tag-${respo}`}>{card_name}</h2>
    </div>
}