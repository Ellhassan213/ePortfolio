import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaBars, FaRegTimesCircle, FaSignature } from 'react-icons/fa'
import { ContentSchemeProps, DisplayProps } from '../../models/HeaderFooterTypes'

export const Header = styled.header<ContentSchemeProps>`
  background-repeat: no-repeat;
  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  min-height: ${props => props.$fullPageDisplay ? '100vh' : '20vh'};
  color: ${props => props.color};
  background-position: left;
  font-size: 1.5rem;
  padding-top: 1rem;
  height: 100%;
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const NavMenu = styled.div<DisplayProps>`
  display: ${props => props.$display ? 'none' : 'flex'};

  @media screen and (max-width: 50em) {
    display: none;
  }
`

export const NavMenuList = styled.ul<DisplayProps>`
  position: fixed;
  display: ${props => props.$display ? 'flex' : 'none'};
  flex-direction: column;
  row-gap: 3rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: black;
  list-style: none;
  padding-top: 4rem;
  animation: topToBottom ease 0.5s;
  margin: 0;
  
  @keyframes topToBottom {
  0% {
    margin-top: -20%;
  }
  100% {
    margin-top: 0%;
  }
}
`

export const HeaderLink = styled(NavLink)`
  color: ${props => props.color};
  text-decoration: none;
  margin: 0 1rem;

  &.active {
    text-decoration: underline;
  }

  &:hover:not(.active) {
    font-weight: bold;
  }
`

export const MenuListLink = styled(NavLink)`
  color: ${props => props.color};
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  &.active {
    text-decoration: underline;
  }

  &:hover:not(.active) {
    font-weight: bold;
  }
`

export const MenuButton = styled.button<ContentSchemeProps & DisplayProps>`
  display: ${props => props.$display ? 'block' : 'none'};
  cursor: pointer;
  border: none;
  background: none;
  color: ${props => props.color};
  font-size: 1.5rem;

  @media screen and (max-width: 50em) {
    display: block;
  }
`

export const HamburgerIcon = styled(FaBars)`
  position: absolute;
  z-index: 100;
  top: 1rem;
  right: 1rem;
`

export const CancelIcon = styled(FaRegTimesCircle)`
  position: fixed;
  z-index: 100;
  top: 1rem;
  right: 1rem;
`

export const Logo = styled(FaSignature)`
  font-size: 1.5rem;
`

export const HeaderCaption = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 1rem;
`
