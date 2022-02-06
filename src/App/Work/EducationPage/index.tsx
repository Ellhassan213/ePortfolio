import React from 'react'
import StyledHeader from '../../../shared/components/Header'
import { EduContainer } from './styles'
import { Outline } from '../../../shared/utils/styles'
import { eduData } from './educationData'

const EducationPage = () => {
  return (
    <>
    <StyledHeader />
    <Outline>
      <h1>Education</h1>
      <p>Bla bla bla...</p>
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
    </>
  )
}

export default EducationPage
