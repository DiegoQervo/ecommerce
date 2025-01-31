import {object, string, ref} from 'yup' //what is yup

export const loginSchema = object({
    
    password:string()
    .min(8,"debe tener 8 characteres")
    .required("La password es requerida")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Debe contener al menos una minúscula, una mayúscula y un número"),
    email:string()
    .email("el email no es valido")
    .required("Email Requerido")
})