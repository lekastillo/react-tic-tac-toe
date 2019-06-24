import React, {Component} from 'react';
import Layout from './components/Layout';
import Board from './components/Board';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

class Game extends Component { 

  constructor(props){
    super(props);
    this.state = {
      board_size: 3,
      board: [],
      status: 0,
      current_letter: 'X'
    }


    this.handleStatusBtn = this.handleStatusBtn.bind(this);
    this.handleChangeBoardSize = this.handleChangeBoardSize.bind(this);
  }

  handleStatusBtn = (status) => {
    if (status=='start') {
      this.startGame();
    } else if (status=='restart'){
      this.restartGame();
    }
  }

  startGame = () => {
    let { board_size } = this.state;
    this.setState({ status: 1, board: [] });
    
    let new_board = []
    for (let row = 0; row <board_size; row++){
      let new_row = []
      for (let cell = 0; cell <board_size; cell++){
        let new_cell = [row, cell, '']
        new_row.push(new_cell);
      }
      new_board.push(new_row);
    }
    this.setState({ board: new_board },function () {
      console.log(this.state.board);
    });
  }
  
  restartGame = () => {
    this.setState({ status: 0, board: [], board_size: 3, current_letter: 'X'},function () {
      console.log(this.state.board);
    });
  }

  handleChangeBoardSize = (event) => {
    this.setState({board_size: event.target.value});
  }

  setMoveOption = (row,cell) => {
    let { board, current_letter } = this.state;
    console.log("Moved: "+row+","+cell+","+current_letter);
    this.saveMove(row,cell);
  }

  saveMove = (row,cell) => {
    let { board, current_letter } = this.state;
    
    if (this.isSquareEmpty(row,cell)){

      board[row][cell][2]=current_letter;
      let new_board = board;
      this.setState({board: new_board}, function(){
        let new_letter = current_letter == 'X' ? 'O' : 'X';
        this.setState({current_letter: new_letter});
      });
    }
  }

  isSquareEmpty = (row,cell) => {
    let { board } = this.state;
    if (board[row][cell][2] == ""){
      console.log("The square: "+row+","+cell+" is empty");
      return true;
    }else{
      console.log("The square: "+row+","+cell+" is occupied");
      return false;
    }
  }

  
  render(){ 

    const {classes} = this.props;
    let { status, board, current_letter, board_size } = this.state;
    let ButtomAction;

    if (status==0){
      ButtomAction = <Button variant="contained" color="primary" onClick={ ()=> this.handleStatusBtn('start')} > Start! </Button>
    }else if (status==1){
      ButtomAction = <Button variant="contained" color="primary" onClick={ ()=> this.handleStatusBtn('restart')} >> Restart! </Button>
    }

    return (

      <div className="App">
        <Layout>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            New Game { board_size }x{board_size }
          </Typography>
          
          { status==0 && <div>
            <TextField
              id="board-size-number"
              label="Board Size "
              value={board_size}
              onChange={this.handleChangeBoardSize}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="filled"
            />
          </div> }
          
          { status==1 && <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
            Turn of { current_letter }
          </Typography> }

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
              { ButtomAction }
              </Grid>
            </Grid>
            <Grid item>
              { status==1 && <Board board={board} current_letter={current_letter} board_size={board_size} setMoveOption={this.setMoveOption} /> }
            </Grid>
          </div>
        </Layout>  
      </div>
    );
  }
}

export default withStyles(useStyles)(Game);