import React from 'react'
import StyledHeader from '../../shared/components/Header'
import { AboutContainer, ImageContainer } from './styles'
import { mugshot } from '../index'
import useBodyFooterColor from '../../shared/hooks/useBodyFooterColor'
import TextArea from './TextArea'

const About = () => {
  const { bodyColor } = useBodyFooterColor()
  return (
    <>
      <StyledHeader backgroundColor={bodyColor} $fullPageDisplay={false}/>
      <AboutContainer backgroundColor='white' color='gray'>
        <ImageContainer>
          <img src={mugshot} alt="Lawal's Image" />
        </ImageContainer>
        <TextArea />
      </AboutContainer>
    </>
  )
}

export default About
