import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import { AppState } from '../../redux/Store';
import DataBadge from '../../components/vb_stat_display/DataBadge';
import { vbActionEfficiency, vbActionTotal } from '../../utils/Calculator';
import { VbActionResult } from '../../models/VBActionResult';

const AttackSection = (props: VbActionResult) => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      <Grid item>
        <DataBadge title="Points" data={props.point || 0} />
      </Grid>
      <Grid item>
        <DataBadge title="Errors" data={props.error} />
      </Grid>
      <Grid item>
        <DataBadge title="Attempts" data={props.success} />
      </Grid>
      <Grid item>
        <DataBadge title="Total" data={vbActionTotal(props)} />
      </Grid>
      <Grid item>
        <DataBadge title="Efficiency" data={`${vbActionEfficiency(props)}%`} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    point: state.sessionStats.present.attack.point || 0,
    error: state.sessionStats.present.attack.error,
    success: state.sessionStats.present.attack.success,
  };
};

export default connect(mapStateToProps)(AttackSection);
