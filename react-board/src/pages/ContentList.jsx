import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";

function ContentList() {
  const [pageActive, setPageActive] = useState(false);

  const contentData = {
    content: [],
    totalPages: 1,
    totalElements: 18,
    last: false,
    numberOfElements: 10,
    size: 10,
    number: 0,
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    first: true,
    empty: false,
  };
  const content = contentData.content;

  const onClickPageNum = (e) => {
    if (pageActive) setPageActive(false);
    else setPageActive(true);
  };

  return (
    <>
      <>
        <Header />
        <section>
          <article>
            <h2>전체 게시글</h2>
            <Table content={content} />
            <div className="navigatePage">
              <span className={`previous ${contentData.first ? "hidden" : ""}`}>이전</span>
              <div className="pageNums">
                {[...Array(contentData.numberOfElements)].map((value, index) => {
                  return (
                    <a key={index} href="" className={pageActive ? "" : "active"} onClick={onClickPageNum}>
                      {index + 1}
                    </a>
                  );
                })}
              </div>
              <span className={`after ${contentData.last ? "hidden" : ""}`}>다음</span>
            </div>
          </article>
        </section>
        <Footer />
      </>
    </>
  );
}

export default ContentList;
