import styled from 'styled-components'

export const EduContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  color: gray;
  font-family: helvetica, times;
  font-weight: lighter;
  line-height: 1.5;
  padding: 1rem 15rem;
  /* background-color: #B1A296; */

  & h3, h4 {
    margin: 0;
  }

  & h4 {
    color: #D83F87;
  }

  @media screen and (max-width: 50em) {
    padding: 1rem;
  }
`
