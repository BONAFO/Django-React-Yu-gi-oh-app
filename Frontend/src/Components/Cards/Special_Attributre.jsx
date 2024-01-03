import { useForm } from 'react-hook-form';

export default function Special_Attribute({ data, name, label, cb = () => { } }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    

    return <>
        {(data == undefined) ? ("") : (
            <div>
                <label id="" className="" required htmlFor="">{label}</label>
                <br />
                <select 
                {...register(name)}
                onChange={(e) => { cb(e) }} id="">
                    {data.map(d => <option value={d.id}>{d.name.toUpperCase()}</option>)}
                </select>
                <br />
            </div>
        )}
    </>
}