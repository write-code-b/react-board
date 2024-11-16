import { useAuth } from "../provider/authProvider";
import Table from "./Table";

function MainSection() {
  const { token, id } = useAuth();

  return (
    <>
      <main>
        <section>
          {token && (
            <div id="userInfo">
              <img src="../public/profile.png" className="profile" alt="" />
              <div>
                <span className="name">안녕하세요,</span>
                <span className="userId">아이디 ({id})</span>
              </div>
            </div>
          )}
          <article>
            <h2>최신 글</h2>
            <Table />
          </article>
        </section>
      </main>
    </>
  );
}

export default MainSection;
