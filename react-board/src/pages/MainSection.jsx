import { Link } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import Table from "./Table";

function MainSection() {
  const { token } = useAuth();

  return (
    <>
      <main>
        <section>
          <div id="userInfo">
            {token && <img src="../public/profile.png" className="profile" alt="" />}
            <div>
              <span className="name">안녕하세요,</span>
              {token && <span className="userId">아이디 ({localStorage.getItem("userId")})</span>}
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
          <article>
            {token && (
              <div className="Content">
                <h2>최신 글</h2>
                <Table />
              </div>
            )}
          </article>
        </section>
      </main>
    </>
  );
}

export default MainSection;
