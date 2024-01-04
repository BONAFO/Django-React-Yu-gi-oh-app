import { validator_dispacher } from "./validate_fields";

export default function Validate_Form_CCARD({ form_id }) {
    const form = document.getElementById(form_id);
    const formdata = new FormData(form);
    const unpacked_data = {};
    for (var pair of formdata.entries()) {
        unpacked_data[pair[0]] = pair[1];
    }
    let validator = true;
    const errors = {};
    
    Object.keys(unpacked_data).map(k => {
        // const { txt, data, bool } = validator_dispacher({ k: unpacked_data[k] })
        // const data= validator_dispacher({ k: unpacked_data[k] })
        // console.log(data);
       
        const { txt, data, bool } = validator_dispacher({ [k]: unpacked_data[k] })
        if(bool){
            unpacked_data[k] = data
        }else{
            // errors.push({key : k, err : txt})
            errors[k] = txt
        }
        validator &= bool
        
    })

    return {
        errors :errors,
        validator: validator,
        data : unpacked_data
    }

}