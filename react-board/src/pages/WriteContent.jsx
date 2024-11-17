import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function WriteContent() {
  const [content, setContent] = useState({
    title: "",
    category: "",
    content: "",
  });

  const onChange = (event) => {
    const { value, name } = event.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  return (
    <>
      <>
        <Header />
        <section>
          <div id="contentForm">
            <h2>글쓰기</h2>
            <div className="top">
              <div className="category">
                <form action="#">
                  <select name="category" value="FREE" onChange={onChange}>
                    {/* <option value="" selected disabled hidden>
                      카테고리를 선택해주세요.
                    </option> */}
                    <option value="NOTICE">NOTICE</option>
                    <option value="FREE">FREE</option>
                    <option value="QNA">QNA</option>
                    <option value="ETC">ETC</option>
                  </select>
                </form>
              </div>
              <div className="title">
                <input name="title" type="text" onChange={onChange} placeholder="제목을 입력해 주세요." />
              </div>
            </div>
            <div className="bottom">
              <textarea name="content" onChange={onChange} placeholder="내용을 입력하세요."></textarea>
            </div>
            <button>글 등록</button>
          </div>
        </section>
        <Footer />
      </>
    </>
  );
}

export default WriteContent;
