import React from "react";
import styled from "styled-components";

export const FMT_COLOR_INDICATOR = "color-indicator";
export const FMT_NUMBER = "number";
export const FMT_DECIMAL = "decimal";
export const FMT_PERCENT = "percentage";
export const FMT_CURRENCY = "currency";
export const FMT_PERCENT_CHANGE = "percentage-change";

const Wrapper = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border-spacing: 0;
`;

const THEAD = styled.thead``;
const TBODY = styled.tbody``;
const TR = styled.tr`
  height: 40px;
`;
const TH = styled.th`
  box-sizing: border-box;
  padding-left: 10px;
  border-bottom: 1px solid #edeaea;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;
const TD = styled.td`
  box-sizing: border-box;
  padding-left: 10px;
  border-bottom: 1px solid #edeaea;
  text-align: left;
  font-size: 13px;
  font-weight: 300;
`;

const Delta = styled.span`
  color: ${p => (p.change > 0 ? "#75DF75" : "#f00")};
`;

function formatValue(value, format, row) {
  if (format === FMT_COLOR_INDICATOR) {
    return value;
  } else if (format === FMT_NUMBER) {
    return new Intl.NumberFormat("nn").format(value);
  } else if (format === FMT_DECIMAL) {
    return new Intl.NumberFormat("nn", {
      minimumFractionDigits: 2
    }).format(value);
  } else if (format === FMT_CURRENCY) {
    return new Intl.NumberFormat("nn", {
      style: "currency",
      currency: "NOK",
      minimumFractionDigits: 2
    }).format(value);
  } else if (format === FMT_PERCENT) {
    return (
      new Intl.NumberFormat("nn", {
        minimumFractionDigits: 2
      }).format(value) + "%"
    );
  } else if (format === FMT_PERCENT_CHANGE) {
    const v = new Intl.NumberFormat("nn").format(value);
    return (
      <Delta change={value}>
        {value >= 0 ? "+" : "-"}
        {v}%
      </Delta>
    );
  }

  return value;
}

export const Table = ({ data: { labels, keys, format, rows }, children }) => (
  <Wrapper>
    {children}
    <THEAD>
      <TR>{labels.map(l => <TH key={l}>{l}</TH>)}</TR>
    </THEAD>
    <TBODY>
      {rows.map((row, rIndex) => (
        <TR key={`row-${rIndex}`}>
          {keys.map((k, index) => (
            <TD key={`col-${rIndex}-${index}`}>
              {formatValue(row[k], format[index], row)}
            </TD>
          ))}
        </TR>
      ))}
    </TBODY>
  </Wrapper>
);
