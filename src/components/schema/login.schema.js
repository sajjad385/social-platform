import {object, string, array, date, number} from 'yup'

const loginSchema = object().shape({
    email: string()
        .trim()
        .email()
        .min(2, 'Email must be at least 2')
        .max(30, 'This field must not be greater than 30 character')
        .required('this field is required'),
    password: string()
        .min(2, 'Password Must be greater than 5 characters')
        .max(30, 'This field must not be greater than 20 characters')
        .required('required')
})
export default loginSchema