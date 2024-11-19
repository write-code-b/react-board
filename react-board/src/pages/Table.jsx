import { Link } from "react-router-dom";
import convertDateTime from "../utils/utilFuncion";

function Table(props) {
  return (
    <>
      <table className="contentTable">
        <thead>
          <tr>
            <th> </th>
            <th>제목</th>
            {/* <th>작성자</th> */}
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {props.content?.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>
                  <span className="categoryTag">{data.category}</span>
                </td>
                <td className="title">
                  <Link to={`/contents/${data.id}`}>{data.title}</Link>
                </td>
                {/* <td className="name"></td> */}
                <td className="createdAt">{convertDateTime(data.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
