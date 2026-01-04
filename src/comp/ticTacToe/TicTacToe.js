import { useEffect, useState } from "react";

function TicTacToe() {
  let [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");
  const [winner, SetWinner] = useState(null);
  function handleCell(e, i, j) {
    console.log(i, j);
    setBoard((prevBoard) => {
      let temp = [...prevBoard];
      temp[i][j] = player;
      return temp;
    });
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }
  useEffect(() => {
    rowCheck();
  }, [board]);

  function rowCheck() {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] == board[i][2] &&
        board[i][0] != ""
      ) {
        SetWinner(true);
      } else if (
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i] &&
        board[2][i] == board[0][i] &&
        board[0][i] != ""
      ) {
        SetWinner(true);
      } else if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] === board[2][2] &&
        board[0][0] != ""
      ) {
        SetWinner(true);
      }
    }
  }

  return (
    <div className="tictactoe-Container center-div ">
      <h1 className="m-0">Tic Tac Toe</h1>
      {winner && <p>Adithya - winner , Kiran - going Home &#127968;</p>}
      {board.map((v, i) => {
        return (
          <div className="con-row" key={i}>
            {v.map((cell, j) => (
              <div
                className="con-cell"
                key={j}
                onClick={(e) => handleCell(e, i, j)}
              >
                {cell}
              </div>
            ))}
          </div>
        );
      })}
      <button
        onClick={() => {
          setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);

          setPlayer("X");
          SetWinner(null);
        }}
        className="button-2 mt-20"
      >
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
