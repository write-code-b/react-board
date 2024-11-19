import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import convertDateTime from "../utils/utilFuncion";
import Header from "./Header";
import Footer from "./Footer";

function ContentDetail() {
  const { id } = useParams();
  const [contentData, setContentData] = useState([]);

  //글 상세보기
  const getContentData = () => {
    axios
      .get(`/boards/${id}`)
      .then(function (res) {
        setContentData(res);
        return res;
      })
      .catch(function (err) {
        console.error(err);
        //console.info(error.config);
      });
  };

  const deleteContent = () => {
    axios
      .delete(`/boards/${id}`)

      .then((res) => {
        alert("글을 삭제했습니다.");
        navigate("/list");
      })

      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    //getContentData();
  });

  return (
    <>
      <Header />
      <section id="contentDetail">
        <div className="wrap">
          <div className="buttonBox">
            <Link to={`/edit/${contentData.id}`} state={{ contentData }}>
              <button className="edit">글 수정</button>
            </Link>
            <button className="delete" onClick={deleteContent}>
              글 삭제
            </button>
          </div>
          <div className="top lineBox">
            <div className="categoryTag">{contentData.boardCategory}</div>
            <h3>{contentData.title}</h3>
            <div className="userInfo">
              <img src="../public/profile.png" alt="" />
              <div>
                <span className="name"></span>
                <span className="createdAt">{convertDateTime(contentData.createdAt)}</span>
              </div>
            </div>
          </div>
          <div className="content lineBox">
            <p>{contentData.content}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContentDetail;
