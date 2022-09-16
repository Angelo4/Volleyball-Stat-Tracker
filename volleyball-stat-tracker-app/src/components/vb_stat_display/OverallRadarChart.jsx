import React from 'react';
import {
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis,
  VictoryLabel,
} from 'victory';

const characterData = [
  { strength: 1, intelligence: 5, luck: 1, stealth: 4, charisma: 8 },
];

class OverallRadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(characterData),
      maxima: this.getMaxima(characterData),
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {
    return (
      <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 1] }}>
        <VictoryGroup
          colorScale={['orange']}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data} />;
          })}
        </VictoryGroup>
        {Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis
              key={i}
              dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: 'none' },
                grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 },
              }}
              tickLabelComponent={<VictoryLabel labelPlacement='vertical' />}
              labelPlacement='perpendicular'
              label={key}
              domain={[0, 8]}
            />
          );
        })}
        <VictoryPolarAxis
          labelPlacement='parallel'
          tickFormat={() => ''}
          style={{
            axis: { stroke: 'none' },
            grid: { stroke: 'grey', opacity: 0.5 },
          }}
        />
      </VictoryChart>
    );
  }
}

export default OverallRadarChart;
