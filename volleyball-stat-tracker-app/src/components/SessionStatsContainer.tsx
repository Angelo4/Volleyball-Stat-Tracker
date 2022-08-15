import { Button, ButtonGroup, Grid } from '@mui/material';
import { connect } from 'react-redux';
import DataBadge from './vb_stat_display/DataBadge';

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
      <ButtonGroup variant="outlined" aria-label="text button group">
        <Button>Scoring</Button>
        <Button>Attack</Button>
        <Button>Block</Button>
        <Button>Serve</Button>
        <Button>Reception</Button>
        <Button>Dig</Button>
        <Button>Set</Button>
      </ButtonGroup>

      <Grid container spacing={2}>
        <Grid item>
          <DataBadge title="Points" data={props.sessionStats.attack.point} />
        </Grid>
        <Grid item>
          <DataBadge title="Errors" data={props.sessionStats.attack.error} />
        </Grid>
        <Grid item>
          <DataBadge
            title="Attempts"
            data={props.sessionStats.attack.success}
          />
        </Grid>
        <Grid item>
          <DataBadge title="Total" data={total} />
        </Grid>
        <Grid item>
          <DataBadge
            title="Efficiency"
            data={`${(calculation * 100).toFixed(2)}%`}
          />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { sessionStats: state.sessionStats };
};

export default connect(mapStateToProps)(SessionStatsContainer);
