import React from 'react'
import StyledHeader from '../../shared/components/Header'
import StyledFooter from '../../shared/components/Footer'
import { AboutContainer, ImageContainer } from './styles'
import { mugshot } from '../index'
import { profFooterContents } from '../../shared/constants/footerContents'
import useBodyFooterColor from '../../shared/hooks/useBodyFooterColor'
import TextArea from './TextArea'

const About = () => {
  const { bodyColor, footerColor } = useBodyFooterColor()
  return (
    <>
      <StyledHeader backgroundColor={bodyColor} $fullPageDisplay={false}/>
      <AboutContainer backgroundColor={bodyColor}>
        <ImageContainer>
          <img src={mugshot} alt="Lawal's Image" />
        </ImageContainer>
        <TextArea />
      </AboutContainer>
      <StyledFooter backgroundColor={footerColor} footerContents={profFooterContents} />
    </>
  )
}

export default About
