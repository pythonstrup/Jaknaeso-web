import dayjs from 'dayjs';

const formatDate = (date: string) => {
  const format = 'YYYY.M.DD';
  return dayjs(date, 'YYYY.MM.DD').format(format);
};

const formatDateRange = (start: string, end: string) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  return `${startDate.format('YYYY.MM.DD')} - ${endDate.format('YYYY.MM.DD')}`;
};

export { formatDate, formatDateRange };
