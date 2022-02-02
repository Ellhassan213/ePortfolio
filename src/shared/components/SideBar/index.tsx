import React from 'react'
import { SideBar, CloseButton } from './styles'

export interface SideBarPropsI {
  children: React.ReactElement,
  hideSideBar: () => void,
}

export interface SideBarActiveI {
  isSideBar: boolean
}

const StyledSideBar = ({ children, hideSideBar }: SideBarPropsI) => {
  return (
    <SideBar>
      {children}
      <CloseButton onClick={hideSideBar} />
    </SideBar>
  )
}

export default StyledSideBar
