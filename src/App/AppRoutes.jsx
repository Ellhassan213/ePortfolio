import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Work from './Work'
import About from './About'
import EmpHistoryPage from './Work/EmpHistoryPage'
import IkigaiPage from './Work/IkigaiPage'
import ACSPage from './Work/ACSPage'
import {
  rootPath,
  aboutPath,
  empHistoryPath,
  ikigaiPath,
  ACSPath
} from '../shared/constants/routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={rootPath} element={<Work />} />
      <Route path={aboutPath} element={<About />} />
      <Route path={empHistoryPath} element={<EmpHistoryPage />} />
      <Route path={ikigaiPath} element={<IkigaiPage />} />
      <Route path={ACSPath} element={<ACSPage />} />
    </Routes>
  )
}

export default AppRoutes
