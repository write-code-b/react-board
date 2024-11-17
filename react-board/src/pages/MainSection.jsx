import { Link } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { jwtDecode } from "jwt-decode";

function MainSection() {
  const { token } = useAuth();
  const decodedToken = jwtDecode(token);

  return (
    <>
      <main>
        <section>
          <div id="userInfo">
            {token && <img src="../public/profile.png" className="profile" alt="" />}
            <div>
              {token && <span className="name">안녕하세요, {decodedToken.name}님.</span>}
              {token && <span className="userId">아이디 ({decodedToken.username})</span>}
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
