import { useAuth } from "../provider/authProvider";

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
            <table className="contentTable">
              <tr>
                <th> </th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
              <tr>
                <td className="category">
                  <span>NOTICE</span>
                </td>
                <td className="title">제목1입니다. 제목1입니다. 제목1입니다.</td>
                <td className="name">최민지</td>
              </tr>
            </table>
          </article>
        </section>
      </main>
    </>
  );
}

export default MainSection;
