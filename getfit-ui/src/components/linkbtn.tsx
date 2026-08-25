import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface LinkButtonProps {
  to: string;
  children: ReactNode;
}

function LinkButton({ to, children }: LinkButtonProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${to}`)}>
      {children}
    </button>
  );
}

export default LinkButton;