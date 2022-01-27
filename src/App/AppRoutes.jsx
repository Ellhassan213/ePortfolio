import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Work from './Work'
import About from './About'
import TTLPage from './Work/TTLPage'
import {
  rootPath,
  aboutPath,
  ttlPath
} from '../shared/constants/routes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={rootPath} element={<Work />} />
      <Route path={aboutPath} element={<About />} />
      <Route path={ttlPath} element={<TTLPage />} />
    </Routes>
  )
}

export default AppRoutes
