import React, { Component, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Results from "./Results";
import { Game as GameModel } from '../models/Game';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// const classes = useStyles();

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new GameModel()
        };
        this.playGame = this.playGame.bind(this);
        this.output = this.output.bind(this);
        this.reset = this.reset.bind(this);


    }

    playGame() {
        console.log('playing game, dudelies');
        let game = this.state.game;
        game.isPlaying = true;

        this.setState({ game: game.play() });
    }

    reset() {
        this.setState({ game: new GameModel() });
    }

    output() {
        let r = null;

        if (this.state.game.isPlaying) {
            return (
                <Fragment>
                    <Grid container spacing={3}>
                        {this.state.game.board.guessRows.map((row, index) => {
                            return (
                                <Grid container item xs={12} key={`row-${index}`}>
                                    {
                                        row.code.code.map((placement, idx) => {
                                            return (
                                                <Grid item xs={4} key={`placement-${idx}`}>
                                                    {placement.piece.color}
                                                </Grid>
                                            );
                                        })
                                    }
                                </Grid>
                            );
                        })}
                        <Grid item xs={12}>
                            <Results foundAnswer={this.state.game.foundAnswer}></Results>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.reset} variant="contained" color="secondary">Reset</Button>
                        </Grid>


                    </Grid>
                </Fragment>
            );
        } else {
            return (
                <Button onClick={this.playGame} variant="contained" color="primary">
                    Play the game
                </Button>
            );
        }
    }

    render() {
        return (
            <Container maxwidth="sm">
                <Typography variant="h1" component="h1" gutterBottom>
                    Matt&rsquo;s Mastermind
                </Typography>
                {this.output()}
            </Container>
        );
    }
}

