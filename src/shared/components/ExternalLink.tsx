import React from 'react'
import { LinkProps } from '../models/HeaderFooterTypes'

const ExternalLink = ({ name, link }: LinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {name}
    </a>
  )
}

export default ExternalLink
