import type { Square } from "@/types/game";

type SquareProps = {
  val: Square;
  handleClick: () => void;
};

export function Square({ val, handleClick }: SquareProps) {
  return (
    <button
      className="flex justify-center items-center text-3xl font-medium border-2 border-slate-400 aspect-square"
      type="button"
      onClick={handleClick}
    >
      {val}
    </button>
  );
}
