class Game {
  private board: string[][];

  constructor() {
    this.board = [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ];
  }

  public checkWinner(): string | null {
    return null;
  }

  public anyMovesLeft(): boolean {
    return false;
  }

  public isGameOver(): boolean {
    return true;
  }
}
