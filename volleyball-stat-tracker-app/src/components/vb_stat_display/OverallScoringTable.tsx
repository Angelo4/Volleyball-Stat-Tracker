import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { connect } from 'react-redux';
import { VbActionResult } from '../../models/VBActionResult';
import { VolleyBallStats } from '../../redux/StatsKeeper';
import { AppState } from '../../redux/Store';
import {
  vbActionEfficiency,
  vbActionTotal,
  vbStatsOffenseTotal,
} from '../../utils/Calculator';

const createScoringRow = (name: string, result: VbActionResult) => {
  const point = result.point || 0;
  return {
    name,
    point,
    ...result,
    total: vbActionTotal(result),
    efficiency: vbActionEfficiency(result),
  };
};

export const OverallScoringTable = (props: VolleyBallStats) => {
  const final = vbStatsOffenseTotal(props);

  const scoringRows: ReturnType<typeof createScoringRow>[] = [
    createScoringRow('Attack', props.attack),
    createScoringRow('Block', props.block),
    createScoringRow('Serve', props.serve),
    createScoringRow('Set', props.set),
    {
      name: 'Overall',
      point: final.point,
      error: final.error,
      success: final.success,
      total: final.total,
      efficiency: final.efficiency,
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 520 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center'>Points</TableCell>
            <TableCell align='center'>Error</TableCell>
            <TableCell align='center'>Attempts/Touches</TableCell>
            <TableCell align='center'>Total</TableCell>
            <TableCell align='center'>Efficiency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scoringRows.map((row) => (
            <TableRow hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align='center'>{row.point}</TableCell>
              <TableCell align='center'>{row.error}</TableCell>
              <TableCell align='center'>{row.success}</TableCell>
              <TableCell align='center'>{row.total}</TableCell>
              <TableCell align='center'>{`${row.efficiency}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const mapStateToProps = (state: AppState) => {
  return state.sessionStats.present;
};

export default connect(mapStateToProps)(OverallScoringTable);
