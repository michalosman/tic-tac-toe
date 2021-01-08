const Player = (sign) => {
  let _sign = sign;

  const setSign = (sign) => {
    _sign = sign;
  };

  const getSign = () => {
    return _sign;
  };

  return { setSign, getSign };
};

const gameBoard = (() => {
  const fields = Array.from(document.querySelectorAll("[data-field]"));

  const reset = () => {
    fields.forEach((field) => (field = ""));
  };

  const checkWin = () => {};

  const checkDraw = () => {};

  return {};
})();

const displayController = (() => {
  const gameboard = document.getElementById("gameboard");
  const fields = document.querySelectorAll("[data-field]");

  fields.forEach((field) =>
    field.addEventListener("click", (e) => {
      if (gameboard.classList.contains("x")) {
        e.target.textContent = "X";
      } else if (gameboard.classList.contains("o")) {
        e.target.textContent = "O";
      }
      e.target.classList.add("filled");
      gameboard.update();
    })
  );

  const reset = () => {
    fields.forEach((field) => {
      field.textContent = "";
    });
  };

  const changeSign = () => {
    if (gameboard.classList.contains("x")) {
      gameboard.classList.remove("x");
      gameboard.classList.add("o");
    } else if (gameboard.classList.contains("o")) {
      gameboard.classList.remove("o");
      gameboard.classList.add("x");
    }
  };

  const addSign = (sign) => {};

  return { changeSign, reset };
})();

const gameController = (() => {
  const playerX = Player("X");
  const playerO = Player("O");

  const start = () => {
    reset();
  };

  const reset = () => {};

  return { start };
})();
