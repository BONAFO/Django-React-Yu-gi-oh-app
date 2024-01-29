
import "./css/nav.css"

export default function Nav_Component({text, url}) {
    return <div style={{ display: "inline-block" }}>
        <a className="basic-nav" href={url}>{text}</a>
    </div>
}