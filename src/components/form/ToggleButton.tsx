import { HiEye, HiEyeOff } from "react-icons/hi";
import { Button } from "../ui/button";

interface ToggleButtonProps {
  visible: boolean;
  handleHide: () => void;
}

export default function ToggleButton({
  visible,
  handleHide,
}: ToggleButtonProps) {
  return (
    <Button
      className="border-none rounded-lg"
      type="button"
      variant="outline"
      onClick={handleHide}
      aria-label="切换显示/隐藏密码"
    >
      {visible ? <HiEyeOff /> : <HiEye />}
    </Button>
  );
}
