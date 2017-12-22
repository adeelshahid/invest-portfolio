import React from "react";
import styled from "styled-components";

import Logo from './Logo'
import Menu from './Menu'
import bgImg from './bg.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-image: url(${bgImg});
  background-position: 0 0;
  background-repeat: repeat-x;
  height: 45px;
  padding-bottom: 5px;
`;



export class Header extends React.Component {
  render() {
    return <Wrapper>
      <div/>
      <Logo />
      <Menu/>
    </Wrapper>;
  }
}
