import React from 'react'
import styled from 'styled-components'
import {Panel} from "../../components";

const Wrapper = styled.div`
  border: 1px solid #e2dfdf;
  background-color:#f8f8f8;
  padding: 30px;
`

export class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Panel title="Companies">
          table content
        </Panel>
      </Wrapper>
    )
  }
}