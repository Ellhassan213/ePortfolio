import React from 'react'
import StyledHeader from '../../../shared/components/Header'
import StyledFooter from '../../../shared/components/Footer'
import { ACSBodyContainer, HeadingContainer, CircularListItem, HeadingTitle, Content } from './styles'
import { Outline } from '../../../shared/utils/styles'
import ContactMeForm from '../../../shared/components/ContactMeForm'

const ACSPage = () => {
  return (
    <>
    <StyledHeader backgroundColor='purple'/>
    <Outline>
      <p>Hiya!</p>
      <p>Thanks for showing interest, Looking forward to working
      with you. Scroll down, let me know how I can help.</p>
    </Outline>

    <ACSBodyContainer>
      <HeadingContainer>
        <CircularListItem> <h1>1</h1> </CircularListItem>
        <HeadingTitle> <h2>UK Onboarding</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>2</h1> </CircularListItem>
        <HeadingTitle><h2>Career Mentorship</h2></HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>3</h1> </CircularListItem>
        <HeadingTitle> <h2>Professional Platform</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>4</h1> </CircularListItem>
        <HeadingTitle> <h2>Social Platform</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>5</h1> </CircularListItem>
        <HeadingTitle> <h2>Academy</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>
    </ACSBodyContainer>
    <ContactMeForm backgroundColor='olive'/>
    <StyledFooter backgroundColor='#301934'/>
    </>
  )
}

export default ACSPage
