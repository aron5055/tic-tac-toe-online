import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="md:text-4xl font-semibold text-2xl">
        欢迎来到 Tic-Tac-Toe-Online
      </h1>
      <div className="flex flex-col space-y-6">
        <Link to="/login">
          <Button className="w-32">登陆</Button>
        </Link>
        <Link to="/register">
          <Button className="w-32">注册</Button>
        </Link>
      </div>
    </div>
  );
}
