class TicTacToe {
  private board: string[][];
  private winningCombinations: Array<Array<[number, number]>>;

  constructor() {
    this.board = [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ];
    this.winningCombinations = this.generateWinningCombinations();
  }

  // Creates a 2d array which represents the Tic Tac Toe Board
  // Stores all winning combinations
  private generateWinningCombinations(): Array<Array<[number, number]>> {
    const combinations: Array<Array<[number, number]>> = [];

    // Add all vertical combinations
    for (let col = 0; col < 4; col++) {
      combinations.push([
        [0, col],
        [1, col],
        [2, col],
        [3, col],
      ]);
    }

    // Add all horizontal combinations
    for (let row = 0; row < 4; row++) {
      combinations.push([
        [row, 0],
        [row, 1],
        [row, 2],
        [row, 3],
      ]);
    }

    // Add diagonal combinations
    combinations.push([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
    combinations.push([
      [0, 3],
      [1, 2],
      [2, 1],
      [3, 0],
    ]);

    // Add 4 corners
    combinations.push([
      [0, 0],
      [0, 3],
      [3, 0],
      [3, 3],
    ]);

    // Add 2x2 Boxes
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        combinations.push([
          [row, col],
          [row, col + 1],
          [row + 1, col],
          [row + 1, col + 1],
        ]);
      }
    }

    return combinations;
  }

  public checkWinner(): string | null {
    for (const combo of this.winningCombinations) {
      const [firstPos, secondPos, thirdPos, fourthPos] = combo;

      // Store the X or O marks in the current winning combination
      const [firstMark, secondMark, thirdMark, fourthMark] = [
        this.board[firstPos[0]][firstPos[1]],
        this.board[secondPos[0]][secondPos[1]],
        this.board[thirdPos[0]][thirdPos[1]],
        this.board[fourthPos[0]][fourthPos[1]],
      ];

      // If each position is not empty and is the same return the X or O mark
      if (
        firstMark &&
        firstMark === secondMark &&
        firstMark === thirdMark &&
        firstMark === fourthMark
      ) {
        return firstMark;
      }
    }

    return null;
  }

  // Empty positions are denoted by a empty string in this.board
  // Check if there are any empty positions
  public anyMovesLeft(): boolean {
    for (let row = 0; row < 4; row++) {
      if (this.board[row].indexOf("") !== -1) {
        return true;
      }
    }

    return false;
  }

  public isGameOver(): boolean {
    if (this.checkWinner() !== null) {
      return true;
    }

    if (this.anyMovesLeft() == false) {
      return true;
    }

    return false;
  }
}

export default TicTacToe;
