import { useState, useEffect } from 'react'
import colorSchemes from '../constants/colorSchemes'
import _ from 'lodash'

const useBodyFooterColor = () => {
  const [bodyColor, setBodyColor] = useState('')
  const [footerColor, setFooterColor] = useState('')

  useEffect(() => {
    const colorPicker = _.random(0, colorSchemes.length - 1)
    setBodyColor(colorSchemes[colorPicker].light)
    setFooterColor(colorSchemes[colorPicker].dark)
  }, [])

  return { bodyColor, footerColor }
}

export default useBodyFooterColor
