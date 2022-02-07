import nameValidation from './nameValidation'
import basicValidation from './basicValidation'
import emailValidation from './emailValidation'
import validateForm from './validateForm'

type ValidationTypes = {
  [key: string]: (value: string) => string,
}

const formValidations: ValidationTypes = {
  name: nameValidation,
  email: emailValidation,
  message: basicValidation
}

export default formValidations
export { validateForm }

// Note: I can do better validations all round
