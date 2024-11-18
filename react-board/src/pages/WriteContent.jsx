import { useState, useEffect } from "react";
import Select from "react-select";
import Header from "./Header";
import Footer from "./Footer";

function WriteContent() {
  const [active, setActive] = useState(false);
  const [category, setCategory] = useState("");
  const [content, setContent] = useState({
    title: "",
    content: "",
  });
  const options = [
    { value: "NOTICE", label: "NOTICE" },
    { value: "FREE", label: "FREE" },
    { value: "QNA", label: "QNA" },
    { value: "ETC", label: "ETC" },
  ];

  const onChange = (e) => {
    const { value, name } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const onChangeCategory = (e) => {
    setCategory(e.value);
  };

  useEffect(() => {
    if (category && content.title && content.content) setActive(true);
    else setActive(false);
  }, [content]);

  return (
    <>
      <>
        <Header />
        <section id="contentForm">
          <div className="wrap">
            <h2>글쓰기</h2>
            <div className="top lineBox">
              <div className="category">
                <div className="selectBox">
                  <Select options={options} onChange={onChangeCategory} placeholder={"카테고리를 선택해주세요."} defaultValue={"FREE"} />
                </div>
              </div>
              <div className="title">
                <input name="title" type="text" onChange={onChange} placeholder="제목을 입력해 주세요." />
              </div>
            </div>
            <div className="bottom lineBox">
              <textarea name="content" onChange={onChange} placeholder="내용을 입력하세요."></textarea>
            </div>
            <button className={active ? "" : "inactive"}>글 등록</button>
          </div>
        </section>
        <Footer />
      </>
    </>
  );
}

export default WriteContent;
