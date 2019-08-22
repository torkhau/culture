const parseCmsDate = dateString => {
  const [month, day, year] = dateString.split('/').map(el => parseInt(el, 10));
  const date = new Date(year, month, day);
  return isNaN(date.getTime()) ? null : date;
};

const getRandomIntFromCurrentDate = maxValue =>
  (new Date().getDate() - 1) % maxValue;

export { parseCmsDate, getRandomIntFromCurrentDate };
