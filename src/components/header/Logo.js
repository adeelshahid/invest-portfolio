import React from 'react'
import styled from 'styled-components'
import logoImg from './logo.png'

const Logo = styled.img.attrs({
  src: logoImg
})`

`

export default () => (
  <Logo />
)