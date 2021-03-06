import React from 'react'
import StyledHeader from '../../../shared/components/Header'
import StyledFooter from '../../../shared/components/Footer'
import { EduContainer } from './styles'
import { Outline } from '../../../shared/utils/styles'
import { eduData } from './educationData'
import ContactMeForm from '../../../shared/components/ContactMeForm'

const EducationPage = () => {
  return (
    <>
    <StyledHeader backgroundColor='#2A1B3D'/>
    <Outline>
      <h1>Education</h1>
      <p>
        What do you think about the traditional education system,
        would you ditch University degrees for online courses and bootcamps?
        Would you employ someone that&apos;s made that decision?
      </p>
    </Outline>
    {eduData.map((education, index) => {
      return (
        <EduContainer key={index}>
          <div>
            <h3>{education.schoolName}</h3>
            <p>{education.dateFrom} - {education.dateTo}</p>
          </div>
          <div>
            <h3>{education.courseName}</h3>
            <h4>{education.grade}</h4>
            <p>{education.description}</p>
          </div>
        </EduContainer>
      )
    })}
    <ContactMeForm backgroundColor='#D83F87'/>
    <StyledFooter backgroundColor='#2A1B3D'/>
    </>
  )
}

export default EducationPage
