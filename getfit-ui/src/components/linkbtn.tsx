import { useNavigate } from "react-router-dom";

function LinkButton({ to, children }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${to}`)}>
      {children}
    </button>
  );
}

export default LinkButton;