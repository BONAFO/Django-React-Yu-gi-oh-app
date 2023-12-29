import { useForm } from "react-hook-form"
import { login } from "../../Controllers/Login/axios.call";
import { get_response_code } from "../../Controllers/code_table";
import { show_wait_cursor, show_default_cursor } from "../../Controllers/show_cursor";
import { redirect_to } from "../../App";

export default function Login() {

    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        let msj;
        document.getElementById("submit-btn").disabled = true;
        show_wait_cursor()
        try {
            const response = await login(data);
            localStorage.setItem('token', response.data.token)
            redirect_to({ to: "/home" })
            setTimeout(() => {
                msj = "Welcome back!\n Redirecting"
                alert(msj)
            }, 3000);

        } catch (error) {

            show_default_cursor()
            document.getElementById("submit-btn").disabled = false;
            msj = get_response_code(error.response.status,error.response.data.error)
            alert(msj)
        }

    })

    return <div>
        <div>
            <form action="" method="POST" onSubmit={onSubmit}>
                {/* USAR UN STADO QUE CAMBIE EL TIPO DE INPUT if e.target.value.includes("@") y .com  ,input type = email else text*/}
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
                <button id="submit-btn">Login!</button>
            </form>
        </div>
    </div>
} 