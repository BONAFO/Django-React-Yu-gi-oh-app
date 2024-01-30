import { useResponsiveContext } from "../../../../../Context/IsMobile";

export default function Card_Image({card_image}) {

    const respo = useResponsiveContext();

    return <div className={`img-cont-${respo}`}>
        <img
            className={`img-${respo}`}
            src={card_image}
            alt=""
        />
    </div>
}