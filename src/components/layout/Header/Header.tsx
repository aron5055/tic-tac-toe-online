import { Logo } from "./logo";
import UserArea from "./UserArea";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="w-full flex h-16 items-center justify-around px-4 md:px-8">
        <div className="flex items-center space-x-3">
          <Logo />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Tic-Tac-Toe
            </h1>
            <span className="text-xs text-muted-foreground -mt-1">
              Online Game
            </span>
          </div>
        </div>

        <UserArea />
      </div>
    </header>
  );
}
