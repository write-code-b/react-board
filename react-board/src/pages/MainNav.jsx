import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

function MainNav() {
  const { token } = useAuth();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  return (
    <div className="mainNav">
      <Link to="/">
        <img src="../../public/logo.png" id="logo" alt="" />
      </Link>
      <nav>
        <ul>
          <Link to="/list">
            <li>글 목록</li>
          </Link>
          {!token && (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          )}
          {!token && (
            <Link to="/signup">
              <li>회원가입</li>
            </Link>
          )}
          {token && (
            <Link to="/write">
              <li>글쓰기</li>
            </Link>
          )}
          {token && (
            <Link to="/logout">
              <li onClick={handleLogout}>로그아웃</li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
