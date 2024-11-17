function Table(props) {
  const convertDateTime = (datetime) => {
    try {
      const data = datetime.split("T");
      const time = data[1].split(":");
      const convertData = `${data[0]} ${time[0]} : ${time[1]}`;
      return convertData;
    } catch {
      return;
    }
  };

  return (
    <>
      <table className="contentTable">
        <tr>
          <th> </th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
        {props.content.map((value, index) => {
          return (
            <tr>
              <td className="category">
                <span>{value.category}</span>
              </td>
              <td className="title">{value.title}</td>
              <td className="name">최민지</td>
              <td className="createdAt">{convertDateTime(value.createdAt)}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Table;
