import React, { Component, Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import Placement from "./Placement";

export default class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: props.row,
            isAnswerRow: props.isAnswerRow
        };
    }

    outputResults() {
        if (this.state.isAnswerRow) {
            return null
        } else {
            return (
                <Fragment>
                    Placements: {this.state.row.results.correctPlacements}
                    <br />
                    Colors: { this.state.row.results.correctColors}
                </Fragment>
            )
        }
    }

    render() {
        return (
            <Grid container item xs={12}>
                <Grid container item xs={7} spacing={2}>
                    {this.state.row.code.code.map((placement, idx) => {
                        return (
                            <Placement placement={placement} key={`placement-${idx}`}></Placement>
                        );
                    })
                    }
                </Grid>
                <Grid container item xs={2}>

                </Grid>
                <Grid container item xs={3}>
                    {this.outputResults()}
                </Grid>
            </Grid>
        );
    }
}

