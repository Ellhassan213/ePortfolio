import React from 'react'
import { ShowSelectorProps } from './models/workCategory'
import { SelectorNav, Selector } from './styles'
import { categories } from './workData'

const ShowSelectorNav = ({ currentCategory, chooseCategory }: ShowSelectorProps) => {
  return (
    <SelectorNav>
      <Selector
        onClick={() => chooseCategory('all')}
        selected={currentCategory === 'all' && true}
      >
        Show All
      </Selector>
      {Object.keys(categories).map((category, index) => {
        return (
          <Selector key={`${category}${index}`}
            selected={currentCategory === category && true}
            onClick={() => chooseCategory(category)}
          >
            {category}
          </Selector>
        )
      })}
    </SelectorNav>
  )
}

export default ShowSelectorNav
