import { Square } from "./Square";
import type { Squares } from "@/types/games";

import { calculateWinner } from "@/features/ticTacToe/calculateWinner";

type BoardProps = {
  isXPlayer: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
};

export function Board({ isXPlayer, squares, onPlay }: BoardProps) {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    if (isXPlayer) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onPlay(newSquares);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 w-full aspect-square gap-2 max-w-xs">
      {squares.map((square, index) => (
        <Square
          // eslint-disable-next-line react-x/no-array-index-key
          key={index}
          val={square}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
