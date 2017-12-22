import React from 'react'
import styled from 'styled-components'
import {Investor, Dashboard} from "../components";

const Spacer = styled.div`
  height: 30px;
`

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Investor />
        <Spacer />
        <Dashboard/>
      </div>
    )
  }
}