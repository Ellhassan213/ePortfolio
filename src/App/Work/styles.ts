import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface TileProps {
  display: string,
  primaryBackgroundColor?: string,
  secondaryBackgroundColor?: string
}

interface SelectorProps {
  selected: boolean
}

export const Headline = styled.div`
  padding: 4rem 2rem;
  font-size: 1.5rem;
  text-align: center;
  color: #48494D;
  font-family: monospace;
`

export const SelectorNav = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: auto;
  text-align: center;
  padding: 1rem 0;
`

export const Selector = styled.p<SelectorProps>`
  text-transform: uppercase;
  color: ${props => props.selected ? 'black' : 'gray'};
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  cursor: pointer;

  &:hover:not(.active) {
    color: black;
  }
`

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 500px;
  grid-auto-flow: dense;
`

export const Tile = styled.div<TileProps>`
  display: ${props => props.display};
  background: ${props => props.primaryBackgroundColor};
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color: white;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: ${props => props.secondaryBackgroundColor};

    & img {
      transform: scale(1.5);
    }
  }

  & > img {
    max-width: 100%;
    max-height: 100%;
    background-color: transparent;
    transition: transform .5s;
    /* object-fit: cover; */
    z-index: 79;
  }

  & > p {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 1rem;
    z-index: 80;
  }
`

export const WorkLink = styled(Link)<TileProps>`
  display: ${props => props.display};
`
