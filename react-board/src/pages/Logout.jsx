import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  return (
    <>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </>
  );
};

export default Logout;
