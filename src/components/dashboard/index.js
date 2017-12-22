import React from 'react'
import styled from 'styled-components'
import {Panel, Table} from "../../components";

import {
  FMT_COLOR_INDICATOR,
  FMT_NUMBER,
  FMT_PERCENT,
  FMT_CURRENCY,
  FMT_PERCENT_CHANGE,
} from '../../components/elements/Table'

const Wrapper = styled.div`
  border: 1px solid #e2dfdf;
  background-color:#f8f8f8;
  padding: 30px;
`

const data = {
  labels: ['company', 'shares', 'diluted', 'invested', 'value', ''],
  keys: ['company', 'shares', 'diluted', 'invested', 'value', 'change'],
  format: [FMT_COLOR_INDICATOR, FMT_NUMBER, FMT_PERCENT, FMT_CURRENCY, FMT_CURRENCY, FMT_PERCENT_CHANGE],
  rows: [
    {
      color: '#3adea2',
      company: 'Company A AS',
      shares: 5196,
      diluted: 4.33,
      invested: 67548.00,
      value: 19485000.00,
      change: 28746,
    },
    {
      color: '#4a90e2',
      company: 'Company B AS',
      shares: 25000,
      diluted: 25.00,
      invested: 3375000.00,
      value: 46875000,
      change: 1289,
    }
  ]
}

export class Dashboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Panel title="Companies">
          <Table data={data}>
            <colgroup>
              <col width="40%"/>
            </colgroup>
          </Table>
        </Panel>
      </Wrapper>
    )
  }
}