import React from "react";
import styled, { injectGlobal } from "styled-components";
import { Panel, Table } from "../../components";
import { PieChart, Pie, Sector, Cell } from "recharts";

import {
  FMT_COLOR_INDICATOR,
  FMT_NUMBER,
  FMT_PERCENT,
  FMT_CURRENCY,
  FMT_PERCENT_CHANGE
} from "../../components/elements/Table";

injectGlobal`
  .dashboard .recharts-surface {
    position: absolute;  
    left: 20%;
  }
`;

const Wrapper = styled.div`
  border: 1px solid #e2dfdf;
  background-color: #f8f8f8;
  padding: 30px;
`;

const data = {
  labels: ["company", "shares", "diluted", "invested", "value", ""],
  keys: ["company", "shares", "diluted", "invested", "value", "change"],
  format: [
    FMT_COLOR_INDICATOR,
    FMT_NUMBER,
    FMT_PERCENT,
    FMT_CURRENCY,
    FMT_CURRENCY,
    FMT_PERCENT_CHANGE
  ],
  rows: [
    {
      color: "#3adea2",
      company: "Company A AS",
      shares: 5196,
      diluted: 4.33,
      invested: 67548.0,
      value: 19485000.0,
      change: 28746
    },
    {
      color: "#4a90e2",
      company: "Company B AS",
      shares: 25000,
      diluted: 25.0,
      invested: 3375000.0,
      value: 46875000,
      change: 1289
    }
  ]
};

const RADIAN = Math.PI / 180;
const renderPieChartLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export class Dashboard extends React.Component {
  render() {
    const chartData = data.rows.map(r => ({
      name: r.company,
      value: r.value
    }))
    const COLORS = data.rows.map(r => r.color)

    return (
      <Wrapper className="dashboard">
        <Panel title="Companies">
          <Table data={data}>
            <colgroup>
              <col width="40%" />
            </colgroup>
          </Table>

          <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
              cx={300}
              cy={200}
              data={chartData}
              labelLine={false}
              label={renderPieChartLabel}
              outerRadius={170}
              fill="#8884d8"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`pie-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Panel>
      </Wrapper>
    );
  }
}
