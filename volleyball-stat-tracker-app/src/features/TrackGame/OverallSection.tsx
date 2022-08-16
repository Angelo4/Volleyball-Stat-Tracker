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

const createScoringRow = (name: string, result: VbActionResult) => {
  const point = result.point ? result.point : 0;
  return {
    name,
    point,
    ...result,
    total: result.error + result.success + point,
  };
};

const OverallSection = (props: VolleyBallStats) => {
  const scoringRows: ReturnType<typeof createScoringRow>[] = [
    createScoringRow('Attack', props.attack),
    createScoringRow('Block', props.block),
    createScoringRow('Serve', props.serve),
    createScoringRow('Set', props.set),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Scoring</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Error</TableCell>
              <TableCell align="right">Attempts/Touches</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Efficiency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoringRows.map((row) => (
              <TableRow
                key={row.name}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.point}</TableCell>
                <TableCell align="right">{row.error}</TableCell>
                <TableCell align="right">{row.success}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">00.00%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return state.sessionStats;
};

export default connect(mapStateToProps)(OverallSection);
