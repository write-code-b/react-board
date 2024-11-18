import { Link } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

function MainSection() {
  const { token } = useAuth();
  const decodedToken = token ? jwtDecode(token) : "";

  return (
    <>
      <main>
        <section>
          <div id="userInfo">
            {token && <img src="../public/profile.png" className="profile" alt="" />}
            <div>
              {token && (
                <div className="info">
                  <span className="name">안녕하세요, {decodedToken.name}님.</span>
                  <span className="userId">아이디 ({decodedToken.username})</span>
                </div>
              )}
              {!token && (
                <span>
                  <Link to="/login">
                    <a href="">로그인</a>
                  </Link>
                  을 해주세요.
                </span>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainSection;
