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
import { vbActionEfficiency, vbActionTotal } from '../../utils/Calculator';

const createDefenseRow = (name: string, result: VbActionResult) => {
  const point = result.point || 0;
  return {
    name,
    point,
    ...result,
    total: vbActionTotal(result),
    efficiency: vbActionEfficiency(result, true),
  };
};

export const OverallDefenseTable = (props: VolleyBallStats) => {
  const defenseRows: ReturnType<typeof createDefenseRow>[] = [
    createDefenseRow('Reception', props.reception),
    createDefenseRow('Dig', props.dig),
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Success</TableCell>
            <TableCell align="center">Error</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Efficiency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {defenseRows.map((row) => (
            <TableRow hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.success}</TableCell>
              <TableCell align="center">{row.error}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{`${row.efficiency}%`}</TableCell>
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

export default connect(mapStateToProps)(OverallDefenseTable);