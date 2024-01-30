







import { useResponsiveContext } from "../../../../../Context/IsMobile";

export default function Card_Stars({ card_stars }) {
    const respo = useResponsiveContext();
    
    const create_stars = () => {
        const elements = [];

        for (let i = 1; i <= card_stars; i++) {
            elements.push(
                <img key={"star-" + i}
                    src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png"
                    className={`star-img-${respo}`}
                    alt=""
                />
            );
        }
        if (elements.length == 0) {
            return elements
        }
        return <div className={`star-cont-${respo}`}>
            {elements}
            <br />
        </div>;
    };

 

    return < >{create_stars()}</>
}