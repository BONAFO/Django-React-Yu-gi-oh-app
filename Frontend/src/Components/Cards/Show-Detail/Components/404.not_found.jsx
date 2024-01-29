import { useEffect, useState } from "react";

export default function _404_CARD_NOT_FOUND() {

    const [text, setText] = useState("");

    useEffect(() => {
        if (text.length === 0) {
            setTimeout(() => {
                setText("CARD NOT FOUND")
            }, 1000);
        }
    }, []);
    return <div>
        <h3>{text}</h3>
    </div>
}