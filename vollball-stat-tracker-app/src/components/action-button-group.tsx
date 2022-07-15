import { Button, ButtonGroup, Grid, Typography } from '@mui/material';

type ActionButtonGroupProps = {
  title: string;
  point?: boolean;
};

const ActionButtonGroup = (props: ActionButtonGroupProps) => {
  return (
    <Grid item xs={4}>
      <Typography variant="h5">{props.title}</Typography>
      <ButtonGroup>
        {!!props.point && <Button color="success">Point</Button>}
        <Button>Success</Button>
        <Button color="error">Error</Button>
      </ButtonGroup>
    </Grid>
  );
};

export default ActionButtonGroup;
