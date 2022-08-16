import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import { AppState } from '../../redux/Store';
import DataBadge from './DataBadge';

type Props = {
  point: number;
  error: number;
  success: number;
};

const BlockSection = (props: Props) => {
  const total: number = props.point + props.error + props.success;

  const calculation: number =
    total === 0 ? 0 : (props.point - props.error) / total;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <DataBadge title="Points" data={props.point} />
      </Grid>
      <Grid item>
        <DataBadge title="Errors" data={props.error} />
      </Grid>
      <Grid item>
        <DataBadge title="Touches" data={props.success} />
      </Grid>
      <Grid item>
        <DataBadge title="Total" data={total} />
      </Grid>
      <Grid item>
        <DataBadge
          title="Efficiency"
          data={`${(calculation * 100).toFixed(1)}%`}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => {
  console.log(state);
  return {
    point: state.sessionStats.block.point ? state.sessionStats.block.point : 0,
    error: state.sessionStats.block.error,
    success: state.sessionStats.block.success,
  };
};

export default connect(mapStateToProps)(BlockSection);
