import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: #8195ad;
  color: #fff;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  height: 40px;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.1em;
`;
const Content = styled.div`
  background-color: #fff;
`;

export const Panel = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Wrapper>
);
