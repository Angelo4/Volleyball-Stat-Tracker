import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import DataBadge from './DataBadge';

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

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    point: state.sessionStats.attack.point,
    error: state.sessionStats.attack.error,
    success: state.sessionStats.attack.success,
  };
};

export default connect(mapStateToProps)(AttackSection);
