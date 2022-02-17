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
          I can help you on your journey to the UK. I have been through
          it myself, so I know exactly how to make sure it goes smoothly
          for you. These are what I can help you with:
        </p>
        <ul>
          <li>University and Course Matching.</li>
          <li>Admissions Processing.</li>
          <li>Visa Counselling.</li>
          <li>Sourcing of Accomodation.</li>
        </ul>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>2</h1> </CircularListItem>
        <HeadingTitle><h2>Career Mentorship</h2></HeadingTitle>
      </HeadingContainer>
      <Content>
        <ul>
          <li>First things first, let me help you define your career goals.</li>
          <li>
            We will constantly review this to make sure you are on track
            and make necessary adjustments if need be.
          </li>
          <li>
            I have good methods and insights that will help you make
            specific decision regarding your career. Remember, every
            decision you make today will have long lasting effects, so
            you want to make sure you make the right ones.
          </li>
        </ul>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>3</h1> </CircularListItem>
        <HeadingTitle> <h2>Professional Platform</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          This is something in the works I am developing to help sponsoring
          bodies to collect, maintain and analyse student data. More to come on
          this in the future.
        </p>
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>4</h1> </CircularListItem>
        <HeadingTitle> <h2>Social Platform</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        Let&apos;s get together here, form groups and collaboartions
        socially and professionally. We shall make events happen,
        travel together and just have a good time. We shall also form
        strong partnerships in business ventures and research.
        I will kickstart this soon, so signup and keep your eyes peeled.
      </Content>

      <HeadingContainer>
        <CircularListItem> <h1>5</h1> </CircularListItem>
        <HeadingTitle> <h2>Academy</h2> </HeadingTitle>
      </HeadingContainer>
      <Content>
        <p>
          This is an academy that teaches Engineering, Life Skills and
          Enterpreneurship. At our academy, we challenge traditional
          educational and professional career routes. We believe our
          methods will produce real and tangible result. Results that
          build people and societies.
        </p>
      </Content>
    </ACSBodyContainer>
    <ContactMeForm backgroundColor='olive'/>
    <StyledFooter backgroundColor='#301934'/>
    </>
  )
}

export default ACSPage
