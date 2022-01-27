import React, { useState } from 'react'
import { ContentSchemeProps } from '../../models/HeaderFooterTypes'
import {
  Header,
  HeaderLink,
  MenuListLink,
  NavBar,
  NavMenu,
  HeaderCaption,
  MenuButton,
  HamburgerIcon,
  CancelIcon,
  NavMenuList,
  Logo
} from './styles'

const StyledHeader = ({ backgroundColor, color, $fullPageDisplay, image, caption }: ContentSchemeProps) => {
  const [hamburgerDisplay, setHamburgerDisplay] = useState(false)

  const toggleMenuDisplay = () => {
    setHamburgerDisplay(prev => !prev)
  }

  return (
    <Header
      backgroundColor={backgroundColor}
      color={color}
      $fullPageDisplay={$fullPageDisplay}
      image={image}
      caption={caption}
    >
      <NavBar>
        <HeaderLink to="/" color={color}> <Logo /> </HeaderLink>
        <NavMenu $display={hamburgerDisplay}>
          <HeaderLink to="/" color={color}> Work </HeaderLink>
          <HeaderLink to="/about" color={color}> About </HeaderLink>
        </NavMenu>
      </NavBar>
      {
        caption &&
          <HeaderCaption>
            <p>{caption}</p>
          </HeaderCaption>
      }
      <NavMenuList $display={hamburgerDisplay}>
        <li onClick={toggleMenuDisplay}> <MenuListLink to="/" color={color}> Work </MenuListLink> </li>
        <li onClick={toggleMenuDisplay}> <MenuListLink to="/about" color={color}> About </MenuListLink> </li>
      </NavMenuList>
      <MenuButton onClick={toggleMenuDisplay} color={color} $display={hamburgerDisplay}>
        {hamburgerDisplay ? <CancelIcon /> : <HamburgerIcon />}
      </MenuButton>
    </Header>
  )
}

StyledHeader.defaultProps = {
  backgroundColor: '#1D1C1C',
  color: '#EFFBFE',
  fullPageDisplay: false,
  image: '',
  caption: ''
}

export default StyledHeader
