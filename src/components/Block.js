import * as C from '../constants';

class Block {
  constructor(startCoordinates) {
    this.x = C.BLOCK_START_COORDINATES.x;
    this.y = C.BLOCK_START_COORDINATES.y;
    this.color = 'none';
    this.collided = false;
    this.orientation = 0;
  }

  getShape = () => 'undefined';

  hasCollided = () => this.collided;

  updateCoordinates(coordinates) {
    let xIsInBounds = (!coordinates.x) || (coordinates.x >= 0) || (coordinates.x < C.BOARD_WIDTH_CELLS);
    let yIsInBounds = (!coordinates.y) || (coordinates.y >= 0) || (coordinates.y < C.BOARD_HEIGHT_CELLS);
    
    if(coordinates.x && xIsInBounds){
      this.x = coordinates.x;
    }

    if(coordinates.y && yIsInBounds){
      this.y = coordinates.y;
    }
    
    return xIsInBounds && yIsInBounds;
  }

  static getRandomBlock(startCoordinates) {
    let randomBlockTypeIndex = Math.floor(Math.random() * (C.BLOCK_TYPES.length - 1));
    let blockType = C.BLOCK_TYPES[randomBlockTypeIndex];

    switch(blockType) {
      case 'I':
        return new IBlock(startCoordinates);
      default:
        throw new Error("Block type not found")
    }
  }

  moveLeft = () => this.updateCoordinates({x: this.x - 1});

  moveRight = () => this.updateCoordinates({x: this.x + 1});

  moveDown = () => this.updateCoordinates({y: this.y + 1});
}

class IBlock extends Block {
  constructor(startCoordinates) {
    super(startCoordinates);
    this.color = 'green';
  }
  
  getShape = () => ([
    [this.color],
    [this.color],
    [this.color],
    [this.color]
  ]);
}

export default Block;