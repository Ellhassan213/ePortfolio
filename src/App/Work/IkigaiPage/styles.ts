import styled from 'styled-components'
import { SideBarActiveI } from '../../../shared/components/SideBar/index'

export const PageContainer = styled.div`
  padding: 2rem;
`

export const Svg = styled.svg<SideBarActiveI>`
  display: block;
  width: 50%;
  height: 50%;
  margin: ${props => props.isSideBar ? '0 50% 0' : 'auto'};


  @media screen and (max-width: 50em) {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
`

export const Path = styled.path`
  stroke: #2A3734;
  stroke-width: 0.2;

  &:hover {
    fill: #800000;
  }
`

export const BigText = styled.text`
  text-anchor: middle;
  alignment-baseline: middle;
  font-size: 5px;
  font-weight: 500;
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
`

export const SmallText = styled.text`
  text-anchor: middle;
  alignment-baseline: middle;
  font-size: 4px;
  font-weight: 400;
  text-transform: none;
`
