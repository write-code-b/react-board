import { useAuth } from "../provider/authProvider";
import { Link } from "react-router-dom";

function Header() {
  const { token } = useAuth();

  //로그인 미인증시
  if (!token) {
    return (
      <>
        <header>
          <Link to="/">
            <img src="../../public/logo.png" id="logo" alt="" />
          </Link>
          <nav>
            <ul>
              <li>글 목록</li>
              <Link to="/login">
                <li>로그인</li>
              </Link>
            </ul>
          </nav>
        </header>
      </>
    );
  }
  //로그인 인증시
  return (
    <>
      <header>
        <img src="../../public/logo.png" id="logo" alt="" />
        <nav>
          <ul>
            <li>글 목록</li>
            <Link to="/logout">
              <li>로그아웃</li>
            </Link>
            <li>회원 정보</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
