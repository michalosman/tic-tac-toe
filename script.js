"use strict";

const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const gameBoard = (() => {
  const fields = [9];

  const addElement = (index, element) => {
    fields[index] = element;
  };

  const reset = () => {
    fields.forEach((field) => {
      field = "";
    });
  };

  //getArray

  return { addElement, reset };
})();

const displayController = (() => {
  const gameboard = document.getElementById("gameboard");
  const fields = document.querySelectorAll(".field");

  //updateGameboard (gameBoard.getArray())
  //resetGameboard
  //field.addEventListener(click) - save field gameController currentTurn
  //field.addEventListener(hover) - hover field gameController currentTurn

  return {};
})();

const gameController = (() => {
  const playerX = Player("X");
  const playerO = Player("O");

  //checkWinner
  //changeTurn
  //resetGame

  return {};
})();
