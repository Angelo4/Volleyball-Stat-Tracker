import { Button, ButtonGroup } from '@mui/material';
import AttackSection from './vb_stat_display/AttackSection';

const SessionStatsContainer = () => {
  return (
    <>
      <ButtonGroup variant="outlined" aria-label="text button group">
        <Button>Overall</Button>
        <Button>Scoring</Button>
        <Button>Attack</Button>
        <Button>Block</Button>
        <Button>Serve</Button>
        <Button>Reception</Button>
        <Button>Dig</Button>
        <Button>Set</Button>
      </ButtonGroup>

      <AttackSection />
    </>
  );
};

export default SessionStatsContainer;
