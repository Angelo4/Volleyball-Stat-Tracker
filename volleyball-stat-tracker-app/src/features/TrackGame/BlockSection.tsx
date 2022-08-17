import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import DataBadge from '../../components/vb_stat_display/DataBadge';
import { VbActionResult } from '../../models/VBActionResult';
import { AppState } from '../../redux/Store';
import { vbActionEfficiency, vbActionTotal } from '../../utils/Calculator';

const BlockSection = (props: VbActionResult) => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 2 }}>
      <Grid item>
        <DataBadge title="Points" data={props.point || 0} />
      </Grid>
      <Grid item>
        <DataBadge title="Errors" data={props.error} />
      </Grid>
      <Grid item>
        <DataBadge title="Touches" data={props.success} />
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
    point: state.sessionStats.block.point ? state.sessionStats.block.point : 0,
    error: state.sessionStats.block.error,
    success: state.sessionStats.block.success,
  };
};

export default connect(mapStateToProps)(BlockSection);
