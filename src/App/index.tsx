import React from 'react'
import AppRoutes from './AppRoutes'
import { GlobalStyle } from './styles'
import personShadow from './../shared/assets/images/personShadow.png'
import mugshot from './../shared/assets/images/mugshot.png'

function App () {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  )
}

export { personShadow, mugshot }
export default App
