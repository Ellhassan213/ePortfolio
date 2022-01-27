import styled from 'styled-components'
import { ContentSchemeProps } from '../../models/HeaderFooterTypes'

export const Footer = styled.footer<ContentSchemeProps>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
`

export const FooterLink = styled.a`
  color: ${props => props.color};
  text-decoration: none;
  margin: 0 1rem;
  text-transform: uppercase;

  &:hover {
    font-weight: bold;
  }
`
