import { useResponsiveContext } from "../../Context/IsMobile"

export default function User_Login(){

    const respo = useResponsiveContext()
    return <div>
        <div className={`user-icon-cont-${respo} user-auth-cont-${respo}`}>
            <button className={`user-auth-btn-${respo} user-login-${respo} `}><a className="a-btn" href="/login">LOGIN</a></button>
            <br />
            <button className={`user-auth-btn-${respo} user-signup-${respo} `}><a className="a-btn" href="/signup">SIGNUP</a></button>
        </div>
    </div>
}

