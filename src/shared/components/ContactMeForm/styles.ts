import styled from 'styled-components'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  color: gray;
  font-family: helvetica, times;
  font-weight: lighter;
  line-height: 1.5;
  padding: 5rem 5rem;
  align-items: center;
  /* background-color: beige; */

  @media screen and (max-width: 50em) {
    padding: 5rem 1rem;
  }
`

export const Form = styled.form`
  /* margin: 1rem 0; */
  padding: 1rem;
  border: 2px solid gray;
  /* background-color: white; */
  width: 18rem;
`

export const Label = styled.label`
  display: inline-block;
  width: 5rem;
`

export const Input = styled.input`
  color: blue;
  padding: 0.5rem;
  width: 11.5rem;
`

export const TextArea = styled.textarea`
  color: blue;
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
