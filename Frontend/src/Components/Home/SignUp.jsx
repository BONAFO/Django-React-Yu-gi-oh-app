import { useForm } from "react-hook-form";
import { signup } from "../../Controllers/Signup/axios.call";
import { show_default_cursor, show_wait_cursor } from "../../Controllers/show_cursor";
import { get_response_code } from "../../Controllers/code_table";
import { redirect_to } from "../../App";

export default function SignUp() {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        let msj;
        document.getElementById("submit-btn").disabled = false;
        show_wait_cursor()
        try {
            const response = await signup(data);
            localStorage.setItem('token', response.data.token)
            redirect_to({ to: "/home" })
            setTimeout(() => {
                msj = "Welcome!\n Redirecting"
                alert(msj)
            }, 3000);

        } catch (error) {
            show_default_cursor()
            document.getElementById("submit-btn").disabled = false;
            msj = get_response_code(error.response.status,error.response.data.error)
            alert(msj)
        }

     });
    return (
        <div>
            <div>
                <form onSubmit={onSubmit} method="POST">
                    <div>
                        <label htmlFor="">USERNAME</label>
                        <input type="text" id=""
                            {...register("username", { required: "Please include your email" })}
                        />

                    </div>
                    <br />
                    <div>
                        <label htmlFor="">EMAIL</label>
                        <input type="email" id=""
                            {...register("email", { required: "Please include your email" })}
                        />

                    </div>
                    <br />
                    <div>
                        <label htmlFor="">PASSWORD</label>
                        <input type="password" id=""
                            {...register("password", { required: "Please include your email" })}
                        />

                    </div>
                    <br />
                    <div>
                        <label htmlFor="">REPEAT PASSWORD</label>
                        <input type="password" id=""
                            {...register("repassword", { required: "Please include your email" })}
                        />

                    </div>
                    <br />
                    <button id="submit-btn">Create!</button>

                </form>
            </div>
        </div>
    );
}
