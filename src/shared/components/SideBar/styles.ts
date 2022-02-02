import styled from 'styled-components'
import { FaRegTimesCircle } from 'react-icons/fa'

export const SideBar = styled.div`
  display: block;
  position: fixed;
  font-size: 0.9rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.95);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: leftToRight ease 0.5s;
  margin: 0;
  z-index: 100;

  & p, h1, h2, h3 {
    padding: 0 1rem;
  }

  @media screen and (max-width: 50em) {
    width: 100%;
  }

  @keyframes leftToRight {
  0% {
    margin-left: -50%;
  }
  100% {
    margin-left: 0%;
  }
}
`

export const CloseButton = styled(FaRegTimesCircle)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
`
