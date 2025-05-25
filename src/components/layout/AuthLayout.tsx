import { HiOutlineBackspace } from "react-icons/hi2";
import { Link, Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fixed top-2 left-4">
        <Link to="/" aria-label="回退到主页">
          <HiOutlineBackspace size={30} />
        </Link>
      </div>
      <div className="w-[20%] max-w-[500px] min-w-[300px]">
        <Outlet />
      </div>
    </div>
  );
}
