import { useAuth } from "@/contexts/AuthContext";
import supabase from "@/lib/supabase";
import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { useNavigate } from "react-router";

export default function UserArea() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      void navigate("/", { replace: true });
    } catch (error) {
      console.error("登出失败:", error);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex flex-col items-end">
        <span className="text-sm font-medium text-foreground">
          {user?.username}
        </span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-9 w-9">
            <AvatarImage alt={`${user?.username}的头像`} />
            <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-semibold text-sm">
              {user?.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 p-2">
          <DropdownMenuLabel className="font-normal p-3 flex items-center">
            <Settings className="mr-3 h-4 w-4 text-muted-foreground inline-block" />
            用户设置
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem
            className="cursor-pointer p-3 rounded-md text-destructive hover:bg-destructive/10 focus:text-destructive transition-colors"
            onClick={() => void handleLogout()}
          >
            <LogOut className="mr-3 h-4 w-4" />
            <span>退出登录</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
