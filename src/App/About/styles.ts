import styled from 'styled-components'
import { ContentSchemeProps } from '../../shared/models/HeaderFooterTypes'

export const TextAreaSection = styled.section`
  font-family: helvetica, times;
  line-height: 1.6;
  font-weight: lighter;

  & h4 {
    font-size: 1.5rem;
  }
`

export const ImageContainer = styled.div`
  margin-top: 1rem;
`

export const AboutContainer = styled.div<ContentSchemeProps>`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  @media screen and (max-width: 50em) {
    padding: 1rem;
  }
`
