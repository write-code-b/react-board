import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import Header from "./Header";
import Footer from "./Footer";

function WriteContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [content, setContent] = useState({
    title: "",
    content: "",
    boardCategory: "",
  });
  const options = [
    { value: "NOTICE", label: "NOTICE" },
    { value: "FREE", label: "FREE" },
    { value: "QNA", label: "QNA" },
    { value: "ETC", label: "ETC" },
  ];

  const editContent = () => {
    const formData = new FormData();
    formData.append("request", JSON.stringify(content));

    axios
      .post("/boards", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((res) => {
        alert("글 수정을 완료했습니다.");
        navigate("/list");
      })

      .catch((err) => {
        console.error(err);
      });
  };

  const onChange = (e) => {
    if (e.target) {
      const { value, name } = e.target;
      setContent({
        ...content,
        [name]: value,
      });
    } else {
      setContent({
        ...content,
        ["category"]: e.value,
      });
    }
  };

  useEffect(() => {
    const data = location.state.data;
    setContent(data);
  }, []);

  useEffect(() => {
    if (content.category && content.title && content.content) setActive(true);
    else setActive(false);
  }, [content]);

  return (
    <>
      <>
        <Header />
        <section id="contentForm">
          <div className="wrap">
            <h2>글수정</h2>
            <div className="top lineBox">
              <div className="category">
                <div className="selectBox">
                  <Select options={options} onChange={onChange} placeholder={"카테고리를 선택해주세요."} />
                </div>
              </div>
              <div className="title">
                <input name="title" type="text" onChange={onChange} value={content.title} placeholder="제목을 입력해 주세요." />
              </div>
            </div>
            <div className="bottom lineBox">
              <textarea name="content" onChange={onChange} value={content.content} placeholder="내용을 입력하세요."></textarea>
            </div>
            <button className={active ? "" : "inactive"} onClick={editContent}>
              글 수정
            </button>
          </div>
        </section>
        <Footer />
      </>
    </>
  );
}

export default WriteContent;
