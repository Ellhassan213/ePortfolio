import React from 'react'
import { categories } from './workData'
import { ShowCategoryProps } from './models/workCategory'
import { CategoryContainer, Tile, WorkLink } from './styles'
import { Flipper, Flipped } from 'react-flip-toolkit'
import randomColor from 'randomcolor'

const ShowCategory = ({ currentCategory }: ShowCategoryProps) => {
  return (
    <Flipper flipKey={currentCategory}>
      <CategoryContainer>
        {Object.keys(categories).map((category) => {
          return (
            categories[category].map((work, index) => {
              const tileDisplay = currentCategory === 'all' ? 'flex' : category === currentCategory ? 'flex' : 'none'
              return (
                <Flipped key={`${work.name}${index}`} flipId={work.name}>
                <WorkLink to={work.link} display={tileDisplay}>
                  <Tile
                    display={tileDisplay}
                    primaryBackgroundColor={randomColor()}
                    secondaryBackgroundColor={randomColor()}
                  >
                    <p> {work.name} </p>
                    <img src={work.image} alt={work.name + ' Image'} />
                  </Tile>
                </WorkLink>
                </Flipped>
              )
            })
          )
        })}
      </CategoryContainer>
    </Flipper>
  )
}

export default ShowCategory
