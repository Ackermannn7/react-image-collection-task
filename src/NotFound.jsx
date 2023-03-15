import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>The path is not found</h1>;
      <button onClick={() => navigate("/")}>Назад</button>
    </div>
  );
};
