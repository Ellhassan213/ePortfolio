import styled from 'styled-components'
import { ContactMeFormI } from './models'

export const FormContainer = styled.div<ContactMeFormI>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  color: gray;
  font-family: helvetica, times;
  font-weight: lighter;
  line-height: 1.5;
  padding: 5rem 5rem;
  align-items: center;
  background: linear-gradient(to bottom right, white, ${props => props.backgroundColor});

  @media screen and (max-width: 50em) {
    padding: 5rem 1rem;
    margin: auto;
  }
`

export const Form = styled.form`
  /* margin: 1rem 0; */
  padding: 1rem;
  border: 2px solid gray;
  width: 18rem;
`

export const Label = styled.label`
  display: inline-block;
  width: 5rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  width: 11.5rem;
`

export const TextArea = styled.textarea`
  width: 17.25rem;
  height: 10rem;
`

export const SendButton = styled.input`
  display: grid;
  margin: 2rem 0 0 0;
  place-content: center;
  width: 17.5rem;
  height: 2rem;
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 1rem;
  background: none;
  color: gray;
  box-shadow: 5px 5px 5px gray;

  &:hover {
    box-shadow: none;
    font-weight: bold;
  }
`

export const ContactMeMsg = styled.div`
  width: 18rem;
  font-style: italic;
`

export const InputErrMsg = styled.div`
  margin: -1rem 0 0 5rem;
  width: 11.5rem;
  font-size: 0.6rem;
  color: red;
`
