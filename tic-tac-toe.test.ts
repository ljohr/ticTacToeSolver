import TicTacToe from "./tic-tac-toe.ts";

describe("TicTacToe", () => {
  let game: TicTacToe;

  beforeEach(() => {
    game = new TicTacToe();
  });

  test("Winner in the first row", () => {
    game["board"] = [
      ["X", "X", "X", "X"],
      ["O", "O", "X", "O"],
      ["X", "O", "X", "O"],
      ["O", "X", "O", ""],
    ];
    expect(game.checkWinner()).toBe("X");
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(true);
  });

  test("Winner in the first column", () => {
    game["board"] = [
      ["O", "X", "X", "X"],
      ["O", "O", "X", "O"],
      ["O", "O", "X", "O"],
      ["O", "X", "O", ""],
    ];
    expect(game.checkWinner()).toBe("O");
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(true);
  });

  test("Winner in the diagonal", () => {
    game["board"] = [
      ["O", "X", "X", "X"],
      ["X", "O", "X", "O"],
      ["X", "O", "O", ""],
      ["O", "X", "O", "O"],
    ];
    expect(game.checkWinner()).toBe("O");
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(true);
  });

  test("Winner in the antidiagonal", () => {
    game["board"] = [
      ["O", "X", "X", "X"],
      ["X", "O", "X", "O"],
      ["", "X", "O", "O"],
      ["X", "X", "O", "X"],
    ];
    expect(game.checkWinner()).toBe("X");
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(true);
  });

  test("Winner in the four corners", () => {
    game["board"] = [
      ["X", "X", "", "X"],
      ["O", "O", "X", "O"],
      ["", "", "", "O"],
      ["X", "X", "O", "X"],
    ];
    expect(game.checkWinner()).toBe("X");
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(true);
  });

  test("Winner in a 2x2", () => {
    game["board"] = [
      ["X", "X", "", ""],
      ["X", "X", "", "O"],
      ["", "O", "X", "O"],
      ["", "", "O", ""],
    ];
    expect(game.checkWinner()).toBe("X");
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(true);
  });

  test("No winner and moves left", () => {
    game["board"] = [
      ["X", "O", "X", "O"],
      ["O", "X", "X", "X"],
      ["X", "O", "X", "O"],
      ["O", "X", "O", ""],
    ];
    expect(game.checkWinner()).toBeNull();
    expect(game.anyMovesLeft()).toBe(true);
    expect(game.isGameOver()).toBe(false);
  });

  test("No winner and no remaining moves", () => {
    game["board"] = [
      ["X", "O", "X", "O"],
      ["O", "X", "X", "O"],
      ["O", "X", "O", "X"],
      ["O", "X", "O", "X"],
    ];
    expect(game.checkWinner()).toBeNull();
    expect(game.anyMovesLeft()).toBe(false);
    expect(game.isGameOver()).toBe(true);
  });
});
