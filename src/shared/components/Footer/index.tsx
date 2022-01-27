import React, { Fragment } from 'react'
import { Footer, FooterLink } from './styles'
import { ContentSchemeProps } from '../../models/HeaderFooterTypes'
import { profFooterContents } from '../../constants/footerContents'

const StyledFooter = ({ backgroundColor, color, footerContents }: ContentSchemeProps) => {
  return (
    <Footer backgroundColor={backgroundColor} color={color}>
      {footerContents?.map((item, index) => {
        return (
          <Fragment key={`${item}${index}`}>
            <FooterLink
              href={item.link}
              color={color}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </FooterLink>
            {!(footerContents.length - 1 === index) && <p> | </p> }
          </Fragment>
        )
      })}
    </Footer>
  )
}

StyledFooter.defaultProps = {
  backgroundColor: '#1D1C1C',
  color: '#EFFBFE',
  footerContents: profFooterContents
}

export default StyledFooter
