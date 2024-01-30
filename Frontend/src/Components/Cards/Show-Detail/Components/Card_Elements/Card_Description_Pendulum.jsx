import { useResponsiveContext } from "../../../../../Context/IsMobile";





    const create_description = ({card_pendulum_description, respo}) => {


        if (
            card_pendulum_description !== undefined &&
            card_pendulum_description !== null &&
            card_pendulum_description.length !== 0
        ) {
            return <div className={`pendulum_card_style pend-description-cont-${respo}`}>
                <p className={`pend-description-${respo}`}>{card_pendulum_description}</p>
                <br />
            </div>
        }else{
            return []
        }


    }


export default function Card_Description_Pendulum({card_pendulum_description}){

    const respo = useResponsiveContext();

    return <>
        {create_description({card_pendulum_description, respo})}
    </>
}