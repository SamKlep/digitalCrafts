function ticTacToeWinner(XsAndOs) {
  if (XsAndOs == "XXX") {
    return "X";
  } else if (XsAndOs == "OOO") {
    return "O";
  } else {
    return null;
  }
}

function ticTacToe(game) {
  let winner = null;

  // check for row winner
  for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
      row += game[i][j];
    }
    winner = ticTacToeWinner(row);
    if (winner !== null) {
      return winner;
    }
  }

  // check for column winner
  for (let i = 0; i < 3; i++) {
    let column = "";
    for (let j = 0; j < 3; j++) {
      column += game[j][i];
    }
    winner = ticTacToeWinner(column);
    if (winner !== null) {
      return winner;
    }
  }

  // check for diagonal (top left to bottom right) winner
  let diagonal = "";
  for (let i = 0; i < 3; i++) {
    diagonal += game[i][i];
  }
  winner = ticTacToeWinner(diagonal);
  if (winner !== null) {
    return winner;
  }

  // check for diagonal (top right to bottom left) winner
  diagonal = "";
  let columnIndex = 2;
  for (let i = 0; i < 3; i++) {
    diagonal += game[i][columnIndex--];
  }
  winner = ticTacToeWinner(diagonal);
  if (winner !== null) {
    return winner;
  }

  // if we get here, we didn't find a winner
  return null;
}

/*
console.log(ticTacToe([
    ["O", "O", "O"], 
    ["X", null, "X"], 
    [null, "X", null]]));
console.log(ticTacToe([
    ["O", "X", "O"], 
    ["O", "X", null], 
    [null, "X", null]]));
console.log(ticTacToe([
    ["X", "O", null], 
    [null, "X", "O"], 
    [null, null, "X"]]));
console.log(ticTacToe([
    [null, "X", "O"], 
    [null, "O", "X"], 
    ["O", null, null]]));
console.log(ticTacToe([
    ["O", "O", "X"], 
    [null, "X", "O"], 
    ["X", null, "X"]]));
console.log(ticTacToe([
    ["O", "X", "O"], 
    ["O", "O", null], 
    [null, "X", "X"]]));
 */   