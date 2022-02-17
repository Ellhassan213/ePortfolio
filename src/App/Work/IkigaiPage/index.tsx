import React, { useState } from 'react'
import StyledHeader from '../../../shared/components/Header'
import { PageContainer } from './styles'
import StyledSideBar from '../../../shared/components/SideBar/index'
import Ikigai, { IkigaiInfoI } from './Ikigai'

const IkigaiPage = () => {
  const [isSideBar, setIsSideBar] = useState(false)
  const [sideBarDetails, setSideBarDetails] = useState<IkigaiInfoI>()

  const hideSideBar = () => {
    setIsSideBar(false)
  }

  const showSideBar = (details: IkigaiInfoI) => {
    setIsSideBar(true)
    setSideBarDetails(details)
  }

  return (
    <>
    <StyledHeader backgroundColor='maroon'/>
    <PageContainer>
      <Ikigai isSideBar={isSideBar} showSideBar={showSideBar}/>
    </PageContainer>
    {
      isSideBar &&
      <StyledSideBar hideSideBar={hideSideBar}>
        <>
        <h1>{sideBarDetails?.title}</h1>
        <p>{sideBarDetails?.description}</p>
        {sideBarDetails?.list?.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
        </>
      </StyledSideBar>
    }
    </>
  )
}

export default IkigaiPage
