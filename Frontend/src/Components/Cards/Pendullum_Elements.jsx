import { useForm } from "react-hook-form";
import { create_numeric_options } from "./Numbers_Generator"

export default function create_pendulum_options(isPendulum) {
    if (isPendulum) {
        return <PendullumUI></PendullumUI>
    }
    return ""
}

function PendullumUI() {

    const {
        register,
        formState: { errors },
    } = useForm();

    return <>
        <div>
            <label id="" className="" htmlFor="">SCALE</label>
            <br />
            <select {...register('pendulum_scales')} id="">
                {create_numeric_options(1, 12)}
            </select>
            {errors.pendulum_scales && <p>Error. All Pendullum Card must have Scales. </p>}
            <br />
        </div>

        <div>
            <label id="" className="" htmlFor="">PENDULLUM DESCRIPTION</label>
            <br />
            <textarea {...register('card_pendulum_description')} type="text" id="" className="" placeholder="Card Description" />
            {/* {errors.card_pendulum_description && <p>Error. Your musk</p>} */}
            <br />
        </div>
    </>
}