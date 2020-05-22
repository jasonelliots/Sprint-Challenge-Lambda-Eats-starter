import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup.string()
    .required('Name is a required field')
    .min(2, 'Name must be more than 2 characters')
})

export default formSchema