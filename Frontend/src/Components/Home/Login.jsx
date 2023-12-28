import { useForm } from "react-hook-form"
import { login } from "../../Controllers/Login/axios";



export default function Login() {

    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => {
        login(data)
    })

    return <div>
        <div>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="">USERNAME / EMAIL</label>
                    <input type="text" id=""
                        {...register("username", { required: "Please include your email" })}
                    />

                </div>
                <br />
                <div>
                    <label htmlFor="">PASSWORD</label>
                    <input type="password" id=""
                        {...register("password", { required: "Please include your email" })}
                    />
                </div>
                <button>Login!</button>
            </form>
        </div>
    </div>
} 