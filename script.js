"use strict";

const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const setField = (index, sign) => {
    if (index > board.length) return;
    board[index] = sign;
  };

  const getField = (index) => {
    return board[index];
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };

  return { setField, getField, reset };
})();

const displayController = (() => {
  const fieldElements = document.querySelectorAll(".field");
  const messageElement = document.getElementById("message");
  const restartButton = document.getElementById("restart-button");

  restartButton.addEventListener("click", (e) => {
    gameBoard.reset();
    gameController.reset();
    updateGameboard();
    setMessage("Player X turn");
  });

  fieldElements.forEach((field) =>
    field.addEventListener("click", (e) => {
      if (gameController.isOver() || e.target.textContent !== "") return;
      gameController.playRound(e.target.dataset.index);
      updateGameboard();
    })
  );

  const updateGameboard = () => {
    for (let i = 0; i < fieldElements.length; i++) {
      fieldElements[i].textContent = gameBoard.getField(i);
    }
  };

  const showPopup = (winner) => {
    if (winner === "Draw") {
      setMessage("It's draw!");
    }
    setMessage(`Player ${winner} has won!`);
  };

  const setMessage = (message) => {
    messageElement.textContent = message;
  };

  return { showPopup, setMessage };
})();

const gameController = (() => {
  const playerX = Player("X");
  const playerO = Player("O");
  let round = 1;
  let isGameOver = false;

  const playRound = (fieldIndex) => {
    gameBoard.setField(fieldIndex, getCurrentPlayerSign());
    if (checkWinner()) {
      displayController.showPopup(getCurrentPlayerSign());
      isGameOver = true;
      return;
    }
    if (round === 9) {
      isGameOver = true;
      return;
    }
    round++;
    displayController.setMessage(`Player ${getCurrentPlayerSign()} turn`);
  };

  const getCurrentPlayerSign = () => {
    return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
  };

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let testArray = [];

    for (let i = 0; i < winConditions.length; i++) {
      for (let j = 0; j < 3; j++) {
        testArray.push(gameBoard.getField(winConditions[i][j]));
      }
      if (testArray.every((field) => field === getCurrentPlayerSign())) {
        return true;
      }
      testArray = [];
    }
    return false;
  };

  const isOver = () => {
    return isGameOver;
  };

  const reset = () => {
    round = 1;
    isGameOver = false;
  };

  return { playRound, getCurrentPlayerSign, isOver, reset };
})();
