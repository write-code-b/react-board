import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pagination(props) {
  const [start, setStart] = useState(1); //시작 페이지
  const currentPage = props.currentPage; //현재 페이지
  const pageCount = props.pageCount; //이번 페이지에서 보여줄 개수
  const totalPages = props.totalPages; //총 페이지 개수

  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <>
      <div className="navigatePage">
        <Link to={`?page=${start - 1}`}>
          <span className={`previous ${props.first ? "" : "active"}`}>이전</span>
        </Link>
        <div className="pageNums">
          {[...Array(pageCount)].map((a, i) => (
            <>
              {start + i <= totalPages && (
                <span key={i} className={currentPage === start + i ? "active" : ""}>
                  <Link to={`?page=${start + i}`}>
                    {start + i}
                  </Link>
                </span>
              )}
            </>
          ))}
        </div>
        <Link to={`?page=${start + pageCount}`}>
          <span className={`after ${props.last ? "" : "active"}`}>다음</span>
        </Link>
      </div>
    </>
  );
}

export default Pagination;
