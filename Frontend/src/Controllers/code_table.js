export const get_response_code = (code, extra) => {
    switch (code) {
        case 403:
            return "Error. Invalid Credentials"
        case 409:
                return extra 
        case 500:
            return "Error. Something went wrong in the house!\n" + extra
    }
};