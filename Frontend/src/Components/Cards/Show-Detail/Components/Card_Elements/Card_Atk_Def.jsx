import { useResponsiveContext } from "../../../../../Context/IsMobile";
import { isNotNull } from "../../functions/isNotNull";


function Card_ATK({ card_atk }) {
    const respo = useResponsiveContext();
    return <>
        <label className={`points-lab-${respo}`} htmlFor="">
            <i>⚔︎</i>
        </label>
        <label
            className={`points-lab-${respo} points-txt-${respo}`}
            htmlFor=""
        >
            {card_atk}
        </label>
        <label className={`points-lab-${respo} points-separator-${respo}`} htmlFor="">
            /
        </label>

    </>
}

function Card_DEF({ card_def }) {
    const respo = useResponsiveContext();
    if (isNotNull(card_def)) {
        return <>
            <label className={`points-lab-${respo}`} htmlFor="">
                <i>⛉</i>
            </label>
            <label
                className={`points-lab-${respo}  points-txt-${respo}`}
                htmlFor=""
            >
                {card_def}
            </label>
        </>
    } else {
        return <>

        </>
    }
}



function Card_LINK({ card_link }) {
    const respo = useResponsiveContext();
    if (isNotNull(card_link)) {
        return <>
            <label className={`points-lab-${respo} link-font-style`} htmlFor="">
                LINK-
            </label>
            <label className={`points-lab-${respo} link-font-style`} htmlFor="">
                {card_link}
            </label>
        </>
    } else {
        return <>

        </>
    }
}

export default function Card_ATK_DEF({ card_data }) {
    const respo = useResponsiveContext();

    if (isNotNull(card_data.atk)) {
        return <div className={`points-cont-${respo}`}>
            <Card_ATK card_atk={card_data.atk}></Card_ATK>
            <Card_DEF card_def={card_data.def}></Card_DEF>
            <Card_LINK card_link={card_data.link}></Card_LINK>
        </div>
    } else {
        return <>

        </>
    }

}
