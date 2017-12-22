import React from 'react'
import styled from 'styled-components'

import bellImg from './bell-icon.png'
import menuImg from './menu-icon.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Icon = styled.div`
  cursor: pointer;
  position: relative;
  margin-right: 30px;
`

const Bell = styled.img.attrs({
  src: bellImg,
})`

`

const Count = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  line-height: 17px;
  right: -10px;
  top: -5px;
  background-color:#efa222;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 12px;
`

const Menu = styled.img.attrs({
  src: menuImg
})`

`

export default () => (
  <Wrapper>
    <Icon><Bell /><Count>3</Count></Icon>
    <Icon><Menu /></Icon>
  </Wrapper>
)