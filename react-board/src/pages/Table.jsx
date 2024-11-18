import convertDateTime from "../utils/utilFuncion";

function Table(props) {
  return (
    <>
      <table className="contentTable">
        <thead>
          <tr>
            <th> </th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {props.content.map((value, index) => {
            return (
              <tr>
                <td>
                  <span className="categoryTag">{value.category}</span>
                </td>
                <td className="title">{value.title}</td>
                <td className="name">최민지</td>
                <td className="createdAt">{convertDateTime(value.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
