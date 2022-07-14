import { appBarClasses, Button, Typography } from '@mui/material';
import React, { Component } from 'react';

type Props = {};

type State = {};

export default class TrackGame extends Component<Props, State> {
  state = {
    attack: {
      success: 0,
      error: 0,
    },
    defence: {
      success: 0,
      error: 0,
    },
  };

  successfulAttack = () => {
    this.state.attack.success += 1;
    console.log(this.state.attack.success);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>track-game</div>
        <Typography variant="h4">
          {this.state.attack.success.toString()}
        </Typography>
        <Button variant="contained" onClick={this.successfulAttack}>
          Score
        </Button>
      </>
    );
  }
}
