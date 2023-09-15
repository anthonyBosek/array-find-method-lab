const superbowlWin = (record) => {
  const winYear = record.find(({ result }) => result === "W");
  return winYear ? winYear.year : undefined;
};
