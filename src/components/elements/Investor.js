import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const Photo = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ccc;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`

const Name = styled.div`
  font-weight: 300;
  font-size: 20px;
`

const Company = styled.div`
  font-weight: 300;
  font-size: 13px;
`



export const Investor = () => (
  <Wrapper>
    <Photo/>
    <Info>
      <Name>Pia Person</Name>
      <Company>Invest AS</Company>
    </Info>
  </Wrapper>
)