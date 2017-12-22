import React, { Component } from "react";
import styled from "styled-components";

import { Header } from "./components";
import { Dashboard } from "./pages";
import './App.css';

const Wrapper = styled.div``;
const Page = styled.div`
  width: 1000px;
  margin: 15px auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
      <Header />
        <Page>
        <Dashboard/>
        </Page>
      </Wrapper>
    );
  }
}

export default App;
