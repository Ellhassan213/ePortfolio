import React from 'react'
import StyledHeader from '../../shared/components/Header'
import { AboutContainer, ImageContainer } from './styles'
import useBodyFooterColor from '../../shared/hooks/useBodyFooterColor'
import TextArea from './TextArea'

const About = () => {
  const lawalsGif = 'https://github.com/Ellhassan213/ePortfolio/blob/master/src/shared/assets/images/lawalGif.gif?raw=true'
  const { bodyColor } = useBodyFooterColor()
  return (
    <>
      <StyledHeader backgroundColor={bodyColor} $fullPageDisplay={false}/>
      <AboutContainer backgroundColor='white' color='gray'>
        <ImageContainer>
          <img src={lawalsGif} alt="Lawal's Image" />
        </ImageContainer>
        <TextArea />
      </AboutContainer>
    </>
  )
}

export default About
