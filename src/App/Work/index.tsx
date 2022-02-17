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
import { ImWink2 } from 'react-icons/im'

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
        <h1>Yikes!</h1>
        <p>My portfolio is just a list of things I hope you never ask me to do.... So don&apos;t</p>
        <ImWink2 />
      </Outline>
      <ShowSelectorNav currentCategory={currentCategory} chooseCategory={chooseCategory} />
      <ShowCategory currentCategory={currentCategory} />
      <StyledFooter backgroundColor={footerColor} footerContents={profFooterContents}/>
    </>
  )
}

export default Work
