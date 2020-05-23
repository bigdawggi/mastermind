import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
            game: props.game
        };
        this.playGame = this.playGame.bind(this);



    }
    playGame() {
        console.log('playing game, dudelies');
        this.setState({ game: this.state.game.play() });
    }
    render() {
        return (
            <div>
                <h2>This is the game</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper >
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>1</Grid>
                    <Grid item xs={4}>2</Grid>
                    <Grid item xs={4}>3</Grid>
                </Grid>
                <p> We found the answer, Yes or No?</p>
                <p><strong>{this.state.game.foundAnswer ? 'Yes' : 'No'}</strong></p>
                <Button onClick={this.playGame} variant="contained" color="primary">
                    Play the game
                </Button>
            </div>
        );
    }
}

