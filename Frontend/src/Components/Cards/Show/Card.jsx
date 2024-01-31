
import { build_icon } from "../../../Controllers/Cards/Show/api-icons";
import "../../../styles/Cards/manifiest.css"
import "../../../styles/Reusable/reusable.styles.css"
import { useResponsiveContext } from "../../../Context/IsMobile";
import { useCardContHeightContext } from "./Context/Container_Height";
import { useEffect } from "react";


export default function Card({ card_data }) {
    const respo = useResponsiveContext()
    const min_height = 80
    const { } = useCardContHeightContext();

    // useEffect(() => {
    //     // console.log(document.getElementById(`card-cont-${card_data.id}`).clientHeight );

    //     // async_access(`card-cont-${card_data.id}`);
    // }, []);


    return <div className={`card-frame-${respo}`} id={`card-cont-${card_data.id}`} 
    onClick={() => {
        // alert(window.origin + window.location.pathname + "/")
 
        window.sessionStorage.setItem("origin", window.location.href.replace(window.origin + window.location.pathname, ""))
        const url = window.origin + "/cards/card/" + "?id=" + card_data.id;
        window.location.href = url
    }}>
        {/* <div className={`in-block`} id={`font-cont-${card_data.id}`}>
            <h2 id={`name-${card_data.id}`} className={`card-name-${respo} in-block`}>{card_data.name}</h2>
        </div> */}

        <br />
        <div className={`in-block`} id={`img-cont-${card_data.id}`}>
            <img id={`card-img-${card_data.id}`} onLoad={() => {
            }} src={card_data.url_img} className={`card-img-${respo}`} alt="" />
        </div>
        {/* <br />
        <div className={`r1-stats-${respo}`}>
            <div className={`data-frame-${respo}`} style={{ width: (respo == "desk") ? ("40%") : ("40%") }}>
                {
                    (card_data.stars != "" && card_data.stars != undefined)
                        ? (<>
                            <img src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" className={`star-img-${respo}`} alt="" />
                            <h3 style={{ marginLeft: (respo == "desk") ? ("18%") : ("18%") }} className={`star-txt-${respo}`}>{card_data.stars}</h3>
                        </>)
                        : ((card_data.card_type.name == "t")
                            ? (<img src="https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_trap.png" className={`star-img-${respo}`} alt="" />)
                            : (<img src="https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_spell.png" className={`star-img-${respo}`} alt="" />))
                }

            </div>
        </div> */}

    </div>

    // return (
    //     <div className={`card-frame-${respo}`} onClick={()=>{
    //        const url =  window.origin + "/cards/card/"  + "?id=" +  card_data.id;
    //        window.location.href = url
    //     }}>
    //         <h2 className={`card-name-${respo}`}>{card_data.name}</h2>

    //         <img src={card_data.url_img} className={`card-img-${respo}`} alt="" />
    //         <br />
    //         <div className={`r1-stats-${respo}`}>
    //             <div className={`data-frame-${respo}`} style={{ width: (respo == "desk") ? ("40%") : ("40%") }}>


    //                 {
    //                     (card_data.stars != "" && card_data.stars !=undefined)
    //                         ? (<>
    //                             <img src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" className={`star-img-${respo}`} alt="" />
    //                             <h3 style={{ marginLeft: (respo == "desk") ? ("18%") : ("18%") }} className={`star-txt-${respo}`}>{card_data.stars}</h3>
    //                         </>)
    //                         : ((card_data.card_type.name == "t")
    //                             ? (<img src="https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_trap.png" className={`star-img-${respo}`} alt="" />)
    //                             : (<img src="https://www.db.yugioh-card.com/yugiohdb/external/image/parts/attribute/attribute_icon_spell.png" className={`star-img-${respo}`} alt="" />))
    //                 }


    //                 {/* <img src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" className={`star-img-${respo}`} alt="" />
    //                 <h3 style={{ marginLeft: (respo == "desk") ? ("18%") : ("18%") }} className={`star-txt-${respo}`}>{card_data.stars}</h3> */}
    //             </div>
    //                 <br />
    //             <div className={`data-frame-${respo}`} style={{ width: (respo == "desk") ? ("30%") : ("30%") }}>
    //                 <img src={build_icon({ label: card_data.card_subtype, type_icon: "race" })} className={`star-img-${respo}`} alt="" />
    //             </div>

    //             <div className={`data-frame-${respo}`} style={{ width: (respo == "desk") ? ("30%") : ("30%") }}>
    //                 <img src={build_icon({ label: card_data.attribute, type_icon: "attr" })} className={`star-img-${respo}`} alt="" />
    //             </div>
    //             <br />
    //             <div className={`data-frame r2-stats-${respo}`}>
    //                 {
    //                     (card_data.card_atk != undefined)
    //                         ? (<>
    //                             <i className={`icon-points-${respo}`}>  ⚔︎  </i>
    //                             <h3 className={`stat-txt-${respo}  points-txt-${respo}`} style={{ marginLeft: (respo == "desk") ? ("7%") : ("7%"), width: (respo == "desk") ? ("100%") : ("100%") }}>{card_data.card_atk}</h3>
    //                         </>)
    //                         : ("")
    //                 }

    //             </div>
    //             <br />
    //             <div className={`data-frame r2-stats-${respo}`} >
    //                 {
    //                     (card_data.card_def != undefined)
    //                         ? (<>
    //                             <i className={`icon-points-${respo}`}>  ⛉  </i>
    //                             <h3 className={`stat-txt-${respo} points-txt-${respo}`} style={{ marginLeft: (respo == "desk") ? ("5%") : ("5%") }}>{card_data.card_def}</h3>
    //                         </>)
    //                         : ("")
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // );
}
