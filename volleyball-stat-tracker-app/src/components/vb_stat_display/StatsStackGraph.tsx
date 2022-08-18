import { connect } from 'react-redux';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
} from 'victory';
import { VolleyBallStats } from '../../redux/StatsKeeper';
import { AppState } from '../../redux/Store';

const StatsStackGraph = (props: VolleyBallStats) => {
  const error = [
    { action: 'Attack', total: props.attack.error },
    { action: 'Block', total: props.block.error },
    { action: 'Serve', total: props.serve.error },
    { action: 'Set', total: props.set.error },
  ];

  const success = [
    { action: 'Attack', total: props.attack.success },
    { action: 'Block', total: props.block.success },
    { action: 'Serve', total: props.serve.success },
    { action: 'Set', total: props.set.success },
  ];

  const point = [
    { action: 'Attack', total: props.attack.point || 0 },
    { action: 'Block', total: props.block.point || 0 },
    { action: 'Serve', total: props.serve.point || 0 },
    { action: 'Set', total: props.set.point || 0 },
  ];

  // const StatsStackGraph = () => {
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryAxis
        tickValues={['Attack', 'Block', 'Serve', 'Set']}
        tickFormat={['Attack', 'Block', 'Serve', 'Set']}
      />
      <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
      <VictoryStack>
        <VictoryBar data={error} x="action" y="total" />
        <VictoryBar data={success} x="action" y="total" />
        <VictoryBar data={point} x="action" y="total" />
      </VictoryStack>
    </VictoryChart>
  );
};

export const mapStateToProps = (state: AppState) => {
  return state.sessionStats.present;
};

export default connect(mapStateToProps)(StatsStackGraph);
