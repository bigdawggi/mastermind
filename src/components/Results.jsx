import React, { Component, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';


export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundAnswer: props.foundAnswer
        };
        this.isSuccess = this.isSuccess.bind(this);
    }

    isSuccess() {
        return this.state.foundAnswer;
    }

    render() {
        return (
            <Fragment>
                <Paper elevation="3">
                    <Typography variant="body1" color={this.isSuccess() ? 'success' : 'error'}>
                        {this.isSuccess() ? 'Yes' : 'No'}
                    </Typography>
                </Paper>
            </Fragment>
        );
    }
}

