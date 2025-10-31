import React from "react";

const TicTacToe = () => {
  const [grid, setGrid] = React.useState([]);
  const [turn, setTurn] = React.useState("X");
  const [isWinner, setIsWinner] = React.useState(null);

  const handleReset = () => {
    setGrid(new Array(9).fill(""));
    setTurn("X");
    setIsWinner(null);
  };

  const handleClick = (i) => {
    if (grid[i] !== "") return;
    grid[i] = turn === "X" ? "X" : "O";
    const win = isWin();
    setIsWinner(win ? win : null);
    setGrid([...grid]);
    setTurn(() => (turn === "X" ? "O" : "X"));
  };

  const winState = React.useMemo(
    () => [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    []
  );

  const isWin = () => {
    for (let state of winState) {
      if (
        grid[state[0]] &&
        grid[state[0]] === grid[state[1]] &&
        grid[state[0]] === grid[state[2]]
      ) {
        return grid[state[0]];
      }
    }
    return "";
  };

  React.useEffect(() => {
    setGrid(new Array(9).fill(""));
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-2 tracking-wide">
          Tic Tac Toe
        </h1>

        <div className="grid grid-cols-3 gap-2">
          {grid.map((item, i) => (
            <button
              disabled={isWinner}
              type="button"
              key={i}
              onClick={() => handleClick(i)}
              className={`h-20 w-20 flex items-center justify-center text-4xl font-extrabold rounded-xl border-2 transition-all duration-200 ${
                item === "X"
                  ? "text-pink-600 border-pink-400 bg-pink-50"
                  : item === "O"
                  ? "text-blue-600 border-blue-400 bg-blue-50"
                  : "text-gray-700 border-gray-300 bg-white hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="text-lg font-medium text-gray-800 mt-4">
          {isWinner
            ? `Player ${isWinner} Wins!`
            : `Player ${turn}'s turn`}
        </div>

        <button
          onClick={handleReset}
          className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow transition-all duration-200"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
