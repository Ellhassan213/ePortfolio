import styled from 'styled-components'
import { ContentSchemeProps } from '../../shared/models/HeaderFooterTypes'

export const TextAreaSection = styled.section`
  font-family: papyrus, monaco;

  & h4 {
    font-size: 1.5rem;
  }
`

export const ImageContainer = styled.div`
  margin-top: 1rem;
`

export const AboutContainer = styled.div<ContentSchemeProps>`
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`
