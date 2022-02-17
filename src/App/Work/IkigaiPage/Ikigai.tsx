import React from 'react'
import { Svg, Path, BigText, SmallText } from './styles'
import { ikigaiInfo } from './ikigaiData'

export interface IkigaiInfoI {
  title?: string,
  description?: string,
  list?: string[]
}

interface IkigaiPropsI {
  isSideBar: boolean,
  showSideBar: (details: IkigaiInfoI) => void
}

const Ikigai = ({ isSideBar, showSideBar }: IkigaiPropsI) => {
  return (
    <>
    <Svg viewBox="0 0 185.5 185.5" isSideBar={isSideBar}>
      <g className="lvl-1">
        <Path onClick={() => showSideBar(ikigaiInfo.love)} fill="#FFF380" d="M92.75,47.34A57.49,57.49,0,0,1,147,38.48a57.51,57.51,0,0,0-108.54,0,57.49,57.49,0,0,1,54.27,8.86Z" />
        <SmallText x="50%" y="11%">What I</SmallText>
        <BigText x="50%" y="14%">Love</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.worldNeeds)} fill="#F26B8A" d="M185.5,92.75A57.53,57.53,0,0,0,147,38.48a57.49,57.49,0,0,1-8.86,54.27A57.49,57.49,0,0,1,147,147,57.53,57.53,0,0,0,185.5,92.75Z" />
        <SmallText x="88%" y="48.5%">What the world</SmallText>
        <BigText x="88%" y="51.5%">Needs</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.paidFor)} fill="#6495ED" d="M92.75,138.16A57.49,57.49,0,0,1,38.48,147,57.51,57.51,0,0,0,147,147a57.49,57.49,0,0,1-54.27-8.86Z" />
        <SmallText x="50%" y="86%">What I can be</SmallText>
        <BigText x="50%" y="89%">paid for</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.goodAt)} fill="#3CB043" d="M47.34,92.75a57.49,57.49,0,0,1-8.86-54.27,57.51,57.51,0,0,0,0,108.54,57.49,57.49,0,0,1,8.86-54.27Z" />
        <SmallText x="12%" y="48.5%">What I am</SmallText>
        <BigText x="12%" y="51.5%">good at</BigText>
      </g>

      <g className="lvl-2">
        <Path onClick={() => showSideBar(ikigaiInfo.mission)} fill="#F2BB66" d="M92.75,47.34a57.61,57.61,0,0,1,19,26.39,57.61,57.61,0,0,1,26.39,19A57.49,57.49,0,0,0,147,38.48a57.49,57.49,0,0,0-54.27,8.86Z" />
        <BigText x="69%" y="31%">Mission</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.vocation)} fill="#9E7BB5" d="M138.16,92.75a57.61,57.61,0,0,1-26.39,19,57.61,57.61,0,0,1-19,26.39A57.49,57.49,0,0,0,147,147a57.49,57.49,0,0,0-8.86-54.27Z" />
        <BigText x="69%" y="69%">Vocation</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.profession)} fill="#02A7A9" d="M92.75,138.16a57.61,57.61,0,0,1-19-26.39,57.61,57.61,0,0,1-26.39-19A57.49,57.49,0,0,0,38.48,147a57.49,57.49,0,0,0,54.27-8.86Z" />
        <BigText x="31%" y="69%">Profession</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.passion)} fill="#AEF359" d="M47.34,92.75a57.61,57.61,0,0,1,26.39-19,57.61,57.61,0,0,1,19-26.39,57.49,57.49,0,0,0-54.27-8.86,57.49,57.49,0,0,0,8.86,54.27Z" />
        <BigText x="31%" y="31%">Passion</BigText>
      </g>

      <g className="lvl-3">
        <Path onClick={() => showSideBar(ikigaiInfo.delight)} fill="#F3E5AB" d="M111.77,73.73a57.61,57.61,0,0,0-19-26.39,57.61,57.61,0,0,0-19,26.39,57.62,57.62,0,0,1,38,0Z" />
        <BigText x="50%" y="33%">?</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.excitement)} fill="#EAD5F8" d="M111.77,73.73a57.62,57.62,0,0,1,0,38,57.61,57.61,0,0,0,26.39-19A57.61,57.61,0,0,0,111.77,73.73Z" />
        <BigText x="67%" y="50%">?</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.comfortable)} fill="#808080" d="M73.73,111.77a57.61,57.61,0,0,0,19,26.39,57.61,57.61,0,0,0,19-26.39,57.62,57.62,0,0,1-38,0Z" />
        <BigText x="50%" y="67%">?</BigText>

        <Path onClick={() => showSideBar(ikigaiInfo.satisfaction)} fill="#dffad6" d="M73.73,73.73a57.61,57.61,0,0,0-26.39,19,57.61,57.61,0,0,0,26.39,19,57.62,57.62,0,0,1,0-38Z" />
        <BigText x="33%" y="50%">?</BigText>
      </g>

      <g className="lvl-4">
        <Path onClick={() => showSideBar(ikigaiInfo.ikigai)} fill="#FFFFFF" d="M111.77,73.73a57.62,57.62,0,0,0-38,0,57.62,57.62,0,0,0,0,38,57.62,57.62,0,0,0,38,0,57.62,57.62,0,0,0,0-38Z" />
        <BigText x="50%" y="50%">Ikigai</BigText>
      </g>
    </Svg>
    </>
  )
}

export default Ikigai
