import React from 'react';
import Timer from './Timer';
import Board from './Board';
import Block from './Block';

class Game extends React.Component {
  getTickRate = () => 1;

  getBoardDimensions = () => ({
    height: 20,
    width: 10
  });

  getBlockStartCoordinates = () => ({
    x: 0,
    y: this.boardWidth/2 - 1
  });

  getStyle = () => ({
    display: 'table',
    margin: '0 auto'
  });

  setNewBlock() {
    this.setState({
      currentBlock: Block.getRandomBlock(this.getBlockStartCoordinates())
    });
  }

  componentWillMount(){
    this.setNewBlock();
  }

  renderGame() {
    return(
      <div style={this.getStyle()}>
        <Timer />
        <Board boardDimensions={this.getBoardDimensions()} />
      </div>
    );
  }

  render () {
    if(this.state.currentBlock.hasCollided()){
      this.setNewBlock();
    }
    else{
      return this.renderGame();
    }
  }
}

export default Game;