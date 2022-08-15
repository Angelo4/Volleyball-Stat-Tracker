import { connect } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

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
      {/* <ButtonGroup variant="outlined" aria-label="text button group">
        <Button>Scoring</Button>
        <Button>Attack</Button>
        <Button>Block</Button>
        <Button>Serve</Button>
        <Button>Reception</Button>
        <Button>Dig</Button>
        <Button>Set</Button>
      </ButtonGroup> */}

      <Card sx={{ maxWidth: 200, minHeight: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            benevolent
          </Typography>
        </CardContent>
      </Card>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Point</TableCell>
              <TableCell>Errors</TableCell>
              <TableCell>Attempts</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Efficiency %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={1}>
              <TableCell>{props.sessionStats.attack.point}</TableCell>
              <TableCell>{props.sessionStats.attack.error}</TableCell>
              <TableCell>{props.sessionStats.attack.success}</TableCell>
              <TableCell>{total}</TableCell>
              <TableCell>{`${(calculation * 100).toFixed(2)}%`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { sessionStats: state.sessionStats };
};

export default connect(mapStateToProps)(SessionStatsContainer);
