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
    console.log(this.winningCombinations);
  }

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
    return null;
  }

  public anyMovesLeft(): boolean {
    return false;
  }

  public isGameOver(): boolean {
    return false;
  }
}
