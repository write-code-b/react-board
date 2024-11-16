import { useAuth } from "../provider/authProvider";
import { Link } from "react-router-dom";

function MainNav() {
  const { token } = useAuth();

  return (
    <div className="mainNav">
      <Link to="/">
        <img src="../../public/logo.png" id="logo" alt="" />
      </Link>
      <nav>
        <ul>
          <li>글 목록</li>
          {!token && (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          )}
          {token && (
            <Link to="/logout">
              <li>로그아웃</li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
