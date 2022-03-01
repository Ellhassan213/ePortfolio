import styled from 'styled-components'
import { ContentSchemeProps } from '../../shared/models/HeaderFooterTypes'

export const TextAreaSection = styled.section`
  font-family: helvetica, times;
  line-height: 1.6;
  font-weight: lighter;

  & h4 {
    font-size: 2.5rem;
  }

  & a {
    text-decoration: none;
    color: gray;

    &:hover {
      font-weight: bold;
    }
  }
`

export const ImageContainer = styled.div`
  padding: 4rem 0;

  & img {
    border-radius: 5px;
  }

  @media screen and (max-width: 50em) {
    padding: 1rem;

    & img {
      border-radius: 5px;
      width: 100%;
    }
  }
`

export const AboutContainer = styled.div<ContentSchemeProps>`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  @media screen and (max-width: 50em) {
    padding: 5rem 1rem;
  }
`
