import React, { useState } from 'react'
import StyledHeader from '../../../shared/components/Header'
import StyledFooter from '../../../shared/components/Footer'
import { Outline } from '../../../shared/utils/styles'
import { Grid } from './styles'
import StyledSideBar from '../../../shared/components/SideBar'
import { companies } from './empHistoryData'
import ContactMeForm from '../../../shared/components/ContactMeForm'

interface EmpHistoryI {
  name: string,
  acronym: string,
  image?: string,
  fromDate: Date,
  toDate: Date,
  role: string,
  function: string
}

const EmpHistoryPage = () => {
  const [isSideBar, setIsSideBar] = useState(false)
  const [sideBarDetails, setSideBarDetails] = useState<EmpHistoryI>()

  const hideSideBar = () => {
    setIsSideBar(false)
  }

  const showSideBar = (details: EmpHistoryI) => {
    setIsSideBar(true)
    setSideBarDetails(details)
  }

  return (
    <>
      <StyledHeader backgroundColor='#060113' $fullPageDisplay={false}/>
      {
        !isSideBar &&
        <Outline>
          <p>I have a total of x-years experience. Take a deep dive!</p>
        </Outline>
      }
      <Grid isSideBar={isSideBar}>
        {companies.map((company, index) => {
          return (
            <div key={index} onClick={() => showSideBar(company)}> <p>{company.acronym}</p> </div>
          )
        })}
      </Grid>
      <ContactMeForm />
      <StyledFooter backgroundColor='#060113'/>
      {
        isSideBar &&
        <StyledSideBar hideSideBar={hideSideBar}>
          <>
            {/* <img src={sideBarDetails?.image} /> */}
            <h1>{sideBarDetails?.name}</h1>
            <h3>{sideBarDetails?.fromDate.toDateString()} - {sideBarDetails?.toDate.toDateString()}</h3>
            <h2>{sideBarDetails?.role}</h2>
            <p>{sideBarDetails?.function}</p>
          </>
        </StyledSideBar>
      }
    </>
  )
}

export default EmpHistoryPage
