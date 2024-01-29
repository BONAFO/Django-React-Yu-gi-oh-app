import { useResponsiveContext } from "../../../../Context/IsMobile";
import { build_icon } from "../../../../Controllers/Cards/Show/api-icons";

import "../../../../styles/Card_Detail/manifiest.css";
import { capitalizate } from "../../Show/Controllers/Capitalize";

export default function Card_Detail({ card_data }) {
    console.log(card_data);
    const respo = useResponsiveContext();

    const create_stars = () => {
        const stars = [];

        for (let i = 1; i <= card_data.stars; i++) {
            stars.push(
                <img
                    src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png"
                    className={`star-img-${respo}`}
                    alt=""
                />
            );
        }
        return stars;
    };

    const is_pendulum = () => {
        if (
            card_data.pendulum_scales !== undefined &&
            card_data.pendulum_scales !== null &&
            card_data.pendulum_scales.length !== 0
        ) {
            return (
                <div>
                    <img
                        className={`star-img-${respo} pendulum-icon-${respo}`}
                        src="data:image/webp;base64,UklGRuwEAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSB8BAAABfyAQSFLYH3iFiEgdIAWgrUo583Fn7wG0ASzZDQ2gAUTQADSYIcFEsAJIASvgbgd5/91zJkFE/x25kdRARfCGK/AIdHvMF24fTbNdctDrjaxZ1Uly2PQPT5P3tIajyUe5pis5IuvRYnZMC03+maUS1yY9Jj+jTkI6DMdC5FfcRcA5hbGYP81/ChS5rimNpZzfWjdFVpGsHveUx3IqjZHw4LT61wqt0QM8elVRpzmGb90m7t2W/e3IbQgdr4X4xEunv+00rdy4+PZFqJcvQLr9x2pTgEdTfHJI7fV6V2oAWVyBt7gaECCpIr+9O1EDQEz4v4Ar8JxrG1JbufoBjZxiG+X6oI6ntE3IrbmW3ogqYNILZzwkb5GFK3C4ji4PAABWUDggpgMAAPASAJ0BKkAAQAA+bSyQRaQioZr4vZhABsS1AF9BAKxfJzNXxUN8vDvOHFlugeh3b1XbZvL/7MWvpnJ4X1fFzjsPlIhHOQoqinnv9D9hfOPRc+vf9jfYr/TNymyHYg2cMgZppVZh2crGuNvN6xJVlG9512Dujt2ZjjyQoTb7376onG4qONj89GfoqyObDTOXdEDEUv4N7vduhXzMpYrGAAAA/v6lNlZFrTMt7+bMDGQUuPz1EqyE6zYHCpvT+f4LYiIMtVa1h4YduzQmfi4/iicb4eTrfbkTvPx9vdUSdsDo6l1HVtQzWQaQReDIz3z2UYu3pxdI3K5YTWORu/3zl5/u3pwNhnHFkkOwiVDq1RuxRb8IdFD7BuCIlAg7znBWHm+SxYEOkYH0K/LkoXf3mi+j0rvzhJ8PY/4BzjIOKz0/OfeFFEqV5qrgoPHK/zk19mX+eAn8zz2e1E2M+1teaiDyauJQnbjhM11vT07B6GevZ5ZaLkYmw3LsoluqsZsrx33EJaIGL758igmiN1dk2ItY+5NhDXdVDdPwwPaYpiLKYSU9gVlOR24yoNttFEfPLwpdNcEPj8ubUFaBkxyZCOY+pnuL3lyDcV1Mg1Oi42tdxhBudDifDNhq3pXCVKEmrZ6IZPvu3DhM5c39lHf/nZo7r++JEdAE4+Zo6q8rm6kYB+mitPVPLI7Arz0vPP7D9SOQKa1jdbzkWUTOxO/vThPFpMqD1OvQ7SLJmGp990y0ejBukW6je7c3WzQfXPs5N2pTzIqzJchovb/kXwpYreFsi5rvFCkr71JGokBpXEWS/HcsvH+MctPzocMlJqsl/dFWXvVcZfRnC2OWzGK6rPKbEBq/5O3s6Bte0W1Rjl/uCAYVa6MLva578Xi5AfVd/ps+pBBSJN6mzzjeUloeHx7xLeWqtuat+5eOI8aZXfGqsmb3xGu3mUZ/FJdgL6S4HU4go9kgJ6bOA+aDx5Ul53uc3dTzZJqm+AlqjaPC8NKtTPwP5NuEfDmEWbCph5UgIBURniSie5nXJ7AKqTd7KS02eUbx0Fr5QWcPw/IoTUa7Yu2QqQSooE1F5WKU2L6ghuFtsK3pjoSnFY5EgPEO/2ICXgsu543YNwG+29c2GAHfbmkLsg7rYhpkgaWL+5nd091bJPyM8C+5elLKzduNg3mZ0ALbzyrQOFTv4TDmaEpVb6gFYeyLBLdC6QwZxkBLpsxbUwqzVbs4cQNhb84her+58CWPoAA="
                        alt=""
                    />
                    <label className={`pendulum-tag-${respo}`} htmlFor="">
                        {card_data.pendulum_scales}{" "}
                    </label>
                </div>
            );
        }
    };

    const get_attributes_value =()=>{

        const attribute =  build_icon({label:card_data.attribute,  type_icon:"attr"});
        const race =  build_icon({label:card_data.card_subtype,  type_icon:"race"});

        return <div>
            <img className={`star-img-${respo} attribute-img-${respo}`} src={attribute} alt="" />
            <label  className={`attribute-txt-${respo}`} htmlFor="">{capitalizate(card_data.attribute.name)}</label>
            <img className={`star-img-${respo} race-img-${respo}`} src={race} alt="" />
            <label  className={`attribute-txt-${respo}`} htmlFor="">{capitalizate(card_data.card_subtype.name)}</label>

        </div>
    }

    return (
        <div>
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className={`table-img-${respo}`}>
                                <div className={`img-cont-${respo}`}>
                                    <img className={`img-${respo}`} src={card_data.url_img} alt="" />
                                </div>
                            </td>
                            <td className={`table-data-${respo}`}>
                                <div className={`name-cont-${respo}`}>
                                    <h2 className={`name-tag-${respo}`}>{card_data.name}</h2>
                                </div>

                                <div className={`star-cont-${respo}`}>{create_stars()}</div>
                                <div>{is_pendulum()}</div>
                                <br />
                                <div className={`points-cont-${respo}`}>
                                    <label className={`points-lab-${respo}`}  htmlFor=""><i>⚔︎</i></label>
                                    <label  className={`points-lab-${respo} points-txt-${respo}`} htmlFor="">{card_data.card_atk}</label>
                                    <label className={`points-lab-${respo}`}  htmlFor="">/</label>
                                    {
                                        card_data.card_link !== undefined &&
                                            card_data.card_link !== null &&
                                            card_data.card_link.length !== 0

                                            ?
                                            <>
                                                <label className={`points-lab-${respo}`}   htmlFor="">LINK-</label>
                                                <label  className={`points-lab-${respo}`}  htmlFor="">{card_data.card_link}</label>
                                            </>
                                            :
                                            <>
                                                <label className={`points-lab-${respo}`}  htmlFor=""><i>⛉</i></label>
                                                <label className={`points-lab-${respo}  points-txt-${respo}`}  htmlFor="">{card_data.card_atk}</label>
                                            </>


                                    }

                                    {get_attributes_value()}
                                    <div>
                                        
                                    </div>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
}
