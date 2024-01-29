import { create_numeric_options } from "./Numbers_Generator"

export default function create_link_options(isLink) {
    if (isLink) {
        return <LinkUI></LinkUI>
    }
    return ""
}

function LinkUI() {


    return <>
        <div>
            <label id="" className="" htmlFor="">LINK RANK</label>
            <br />
            <select
                name="card_link"
                id="">
                {create_numeric_options(1, 8)}
            </select>
            <br />
        </div>
    </>
}