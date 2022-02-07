import React, { ChangeEvent, FocusEvent, SyntheticEvent, useState } from 'react'
import { Form, Label, Input, TextArea, SendButton, FormContainer, ContactMeMsg, InputErrMsg } from './styles'
import formValidations, { validateForm } from '../../utils/FormValidations'

const formInitials = {
  name: '',
  email: '',
  message: ''
}

const ContactMeForm = () => {
  const [formInputs, setFormInputs] = useState(formInitials)
  const [formInputsErr, setFormInputsErr] = useState(formInitials)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getFieldErrMsg = (name: string, value: string) => {
    const validator = formValidations?.[name]
    const errMsg = value === '' ? 'required' : validator?.(value)
    return errMsg
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormInputs({
      ...formInputs,
      [name]: value
    })
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    const errMsg = getFieldErrMsg(name, value)
    setFormInputsErr({
      ...formInputsErr,
      [name]: errMsg
    })
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const formValid = validateForm(formInputs, formInputsErr)
    if (formValid) {
      console.log('Submitting')
      setIsSubmitting(true)
      setTimeout(() => {
        console.log('Submitted')
        console.log('Form Valid: ' + formValid)
        setIsSubmitting(false)
      }, 3000)
    } else {
      alert('Errors in form, please make sure all fields are populated')
    }
    return formValid
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div><h1>Woah, you wanna get in touch!</h1></div>
        <p>
          <Label>Fullname</Label>
          <Input
            placeholder='Name here...'
            name='name'
            value={formInputs.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </p>
        {formInputsErr.name && <InputErrMsg>{formInputsErr.name}</InputErrMsg>}

        <p>
          <Label>Email</Label>
          <Input
            placeholder='Your email here...'
            name='email'
            value={formInputs.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </p>
        {formInputsErr.email && <InputErrMsg>{formInputsErr.email}</InputErrMsg>}

        <p><Label>Message</Label></p>
        <p>
          <TextArea
            placeholder='Talk to me :)'
            name='message'
            value={formInputs.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </p>
        {formInputsErr.message && <InputErrMsg>{formInputsErr.message}</InputErrMsg>}

        <SendButton
          type='submit'
          value='Send'
          disabled={isSubmitting}
        />
      </Form>
      <ContactMeMsg>
        <p>
          Contact me for jobs, collaborations, volunteering, my news letters or if you just wanna have a convo.
          We can set something up :)
        </p>
      </ContactMeMsg>
    </FormContainer>
  )
}

export default ContactMeForm
