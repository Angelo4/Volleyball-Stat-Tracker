import { connect } from 'react-redux';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type Props = { sessionStats: any };

const SessionStatsContainer = (props: Props) => {
  const total: number =
    props.sessionStats.attack.point +
    props.sessionStats.attack.error +
    props.sessionStats.attack.success;

  const calculation: number =
    total === 0
      ? 0
      : (props.sessionStats.attack.point - props.sessionStats.attack.error) /
        total;

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Scoring</Button>
        <Button>Attack</Button>
        <Button>Block</Button>
        <Button>Serve</Button>
        <Button>Reception</Button>
        <Button>Dig</Button>
        <Button>Set</Button>
      </ButtonGroup>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Point</StyledTableCell>
              <StyledTableCell>Errors</StyledTableCell>
              <StyledTableCell>Attempts</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              <StyledTableCell>Efficiency %</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={1}>
              <StyledTableCell>
                {props.sessionStats.attack.point}
              </StyledTableCell>
              <StyledTableCell>
                {props.sessionStats.attack.error}
              </StyledTableCell>
              <StyledTableCell>
                {props.sessionStats.attack.success}
              </StyledTableCell>
              <StyledTableCell>{total}</StyledTableCell>
              <StyledTableCell>{`${(calculation * 100).toFixed(
                2,
              )}%`}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { sessionStats: state.sessionStats };
};

export default connect(mapStateToProps)(SessionStatsContainer);
