import { useState } from "react";
import { Board } from "./Board";
import type { Squares } from "@/types/games";

export default function Game() {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(null));
  const [isXPlayer, setIsXPlayer] = useState(true);

  const handlePlay = (nextSquares: Squares) => {
    setSquares(nextSquares);
    setIsXPlayer(!isXPlayer);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Board isXPlayer={isXPlayer} squares={squares} onPlay={handlePlay} />
    </div>
  );
}
