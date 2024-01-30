import { useResponsiveContext } from "../../../../../Context/IsMobile";


    const card_type =(type)=>{
        console.log(type);
        switch (type) {
            case "s":
                    return `spell_card_style`
                break;

                case "t":
                    return `trap_card_style`
                break;
            default:
            return `normal_card_style`
                break;
        }
    }

    const create_description_pendulum = ({description, respo, is_Pendulum, is_TrapMagic }) => {


        if (
            description !== undefined &&
            description !== null &&
            description.length !== 0
        ) {
            return <div className={`${card_type(is_TrapMagic)} ${!is_Pendulum ? `pend-description-cont-${respo}` : `description-cont-${respo}`}`}>
                <p className={` description-${respo}`}>{description}</p>
                <br />
            </div>
        }else{
            return []
        }


    }


export default function Card_Description({description, is_Pendulum,is_TrapMagic }){

    console.log(is_TrapMagic);
    const respo = useResponsiveContext();

    return <>
        {create_description_pendulum({description, respo, is_Pendulum, is_TrapMagic})}
    </>
}