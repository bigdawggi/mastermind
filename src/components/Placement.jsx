import React, { Component, Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import * as Config from '../config';

export default class Placement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: props.placement
        };
    }

    render() {
        return (
            <Grid item xs={12 / Config.CODE_LENGTH}>
                <Paper color="primary" style={{ backgroundColor: this.state.placement.piece.color }}>
                    &nbsp;
                </Paper>
            </Grid>
        );;
    }
}

