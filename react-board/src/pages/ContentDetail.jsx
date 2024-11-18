import convertDateTime from "../utils/utilFuncion";
import Header from "./Header";
import Footer from "./Footer";

function ContentDetail() {
  const data = {
    id: 18,
    title: "[공지8]제목은 공지입니다.",
    content: "공지입니다요",
    boardCategory: "NOTICE",
    imageUrl: "/media/images/519617e7-9742-4693-ab05-cd8c88c31dcf.png",
    createdAt: "2024-11-13T10:46:29.278927",
  };

  return (
    <>
      <Header />
      <section id="contentDetail">
        <div className="wrap">
          <div className="top lineBox">
            <div className="categoryTag">{data.boardCategory}</div>
            <h3>{data.title}</h3>
            <div className="userInfo">
              <img src="../public/profile.png" alt="" />
              <div>
                <span className="name">최민지</span>
                <span className="createdAt">{convertDateTime(data.createdAt)}</span>
              </div>
            </div>
          </div>
          <div className="content lineBox">
            <p>{data.content}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContentDetail;
