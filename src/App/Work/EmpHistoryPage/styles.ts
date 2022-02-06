import styled from 'styled-components'
import { SideBarActiveI } from '../../../shared/components/SideBar/index'

export const Grid = styled.div<SideBarActiveI>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: minmax(400px, 1fr);
  grid-auto-flow: dense;
  color: #48494D;
  padding: 10px 2px;
  grid-gap: 2px;
  justify-content: center;
  margin-left: ${props => props.isSideBar ? '50%' : '0'};

  & p {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
  }

  & div {
    text-align: center;
    padding: 20px;
    font-size: 30px;
    border-radius: 5px;
    background-image: linear-gradient(to bottom right, black, blue);

    &:hover {
      font-weight: bold;
      color: white;
    }
  }

  @media screen and (max-width: 50em) {
    margin-left: 0;
  }
`

export const EmployMe = styled.div`
  background-color: #060113;
  padding: 1rem;
  /* box-shadow: 5px 5px 10px 2px rgba(0,0,0,.8); */
`
