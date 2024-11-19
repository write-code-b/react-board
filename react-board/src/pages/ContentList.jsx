import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";
import Pagination from "./Pagination";

function ContentList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contentListData, setContentListData] = useState([]);
  const page = searchParams.get("page") || 0;
  const size = 10;

  //글 목록 조회
  const getContentListData = () => {
    axios
      .get("/boards", { params: { page, size } })
      .then(function (res) {
        setContentListData(res);
        return res;
      })
      .catch(function (err) {
        console.error(err);
        //console.info(error.config);
      });
  };

  useEffect(() => {
    getContentListData();
  }, []);

  return (
    <>
      <>
        <Header />
        <section id="contentList">
          <div className="wrap">
            <h2>전체 게시글</h2>
            <Table content={contentListData.content} />
            <Pagination first={contentListData.first} last={contentListData.last} totalPages={contentListData.totalPages} currentPage={contentListData.number + 1} pageCount={contentListData.numberOfElements} />
          </div>
        </section>
        <Footer />
      </>
    </>
  );
}

export default ContentList;
