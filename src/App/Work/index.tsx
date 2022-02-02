import React, { useState } from 'react'
import StyledHeader from '../../shared/components/Header'
import StyledFooter from '../../shared/components/Footer'
import { Outline } from '../../shared/utils/styles'
import ShowCategory from './ShowCategory'
import ShowSelectorNav from './ShowSelectorNav'
import { personShadow } from '..'
import { profFooterContents } from '../../shared/constants/footerContents'
import useBodyFooterColor from '../../shared/hooks/useBodyFooterColor'
import { headerCaption } from './workData'

const Work = () => {
  const { bodyColor, footerColor } = useBodyFooterColor()
  const [currentCategory, setCurrentCategory] = useState('all')

  const chooseCategory = (category: string) => {
    setCurrentCategory(category)
  }

  return (
    <>
      <StyledHeader
        backgroundColor={bodyColor}
        $fullPageDisplay={true}
        image={personShadow}
        caption={headerCaption}
      />
      <Outline>
        <p> My portfolio is just a list of things I hope you never ask me to do.... LOL
        I am out of bed and dressed. What more do you want? </p>
      </Outline>
      <ShowSelectorNav currentCategory={currentCategory} chooseCategory={chooseCategory} />
      <ShowCategory currentCategory={currentCategory} />
      <StyledFooter backgroundColor={footerColor} footerContents={profFooterContents}/>
    </>
  )
}

export default Work
