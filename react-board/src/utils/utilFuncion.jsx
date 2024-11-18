const convertDateTime = (datetime) => {
  try {
    const data = datetime.split("T");
    const date = data[0];
    const time = data[1].split(":");
    const today = new Date();
    const todayDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

    if (date == todayDate) return ` ${time[0]} : ${time[1]}`;
    else return `${date}`;
  } catch {
    return;
  }
};

export default convertDateTime;
