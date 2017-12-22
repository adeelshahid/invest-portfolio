import React, { Component } from "react";
import styled from "styled-components";

import { Header, Dashboard } from "./components";
import { HomePage } from "./pages";
import './App.css';

const Wrapper = styled.div``;
const Page = styled.div`
  width: 1000px;
  margin: 30px auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
      <Header />
        <Page>
        <HomePage/>
        </Page>
      </Wrapper>
    );
  }
}

export default App;
