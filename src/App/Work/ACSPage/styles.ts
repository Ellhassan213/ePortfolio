import styled from 'styled-components'

export const ACSBodyContainer = styled.div`
  padding: 1rem;
  color: black;
  /* margin: 0 10%; */
`

export const HeadingContainer = styled.div`
  position: relative;
  /* margin: 0.5rem; */
`

export const CircularListItem = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 8rem;
  width: 8rem;
  background-color: #A5A563;
  border-radius: 50%;
  color: beige;
  text-align: center;
  padding: 1px;
  font-size: 1.5rem;

  @media screen and (max-width: 50em) {
    margin: -3rem;
  }
`

export const HeadingTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 3rem;
  color: purple;
  font-size: 1.2rem;
  margin: -1rem 0;

  @media screen and (max-width: 50em) {
    margin: -3rem;
    bottom: 2rem;
  }
`

export const Content = styled.div`
  margin: 0 0 4rem 3rem;
  font-family: helvetica, times;
  font-weight: lighter;
  line-height: 1.5;
  color: gray;
  /* padding: 0 20% 0 0; */
  /* font-size: 1.1rem; */

  @media screen and (max-width: 50em) {
    margin: 4rem 0 6rem 0;
  }
`
