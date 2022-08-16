import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import { AppState } from '../../redux/Store';
import DataBadge from '../../components/vb_stat_display/DataBadge';

type Props = {
  point: number;
  error: number;
  success: number;
};

const AttackSection = (props: Props) => {
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
        <DataBadge title="Attempts" data={props.success} />
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
  return {
    point: state.sessionStats.attack.point
      ? state.sessionStats.attack.point
      : 0,
    error: state.sessionStats.attack.error,
    success: state.sessionStats.attack.success,
  };
};

export default connect(mapStateToProps)(AttackSection);
