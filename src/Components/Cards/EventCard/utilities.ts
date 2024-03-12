export const convertHoursToMinutes = (hour: string) => {
  const splitHour = hour.split(":");
  const hours = parseInt(splitHour[0], 10);
  const minutes = parseInt(splitHour[1], 10);
  const seconds = parseInt(splitHour[2], 10);

  return hours * 60 + minutes + seconds / 60;
};

export const getHourBeginAndEnd = (dateBegin: string, dateEnd: string) => {
  const formatDateBegin = new Date(dateBegin);

  const hourBegin = formatDateBegin.getHours();
  const minutesBegin = formatDateBegin.getMinutes();
  const secondsBegin = formatDateBegin.getSeconds();

  const formattedHourBegin =
    hourBegin.toString().padStart(2, "0") +
    ":" +
    minutesBegin.toString().padStart(2, "0") +
    ":" +
    secondsBegin.toString().padStart(2, "0");

  // -------------------

  const formatDateEnd = new Date(dateEnd);

  const hourEnd = formatDateEnd.getHours();
  const minutesEnd = formatDateEnd.getMinutes();
  const secondsEnd = formatDateEnd.getSeconds();

  const formattedHourEnd =
    hourEnd.toString().padStart(2, "0") +
    ":" +
    minutesEnd.toString().padStart(2, "0") +
    ":" +
    secondsEnd.toString().padStart(2, "0");

  return `${formattedHourBegin} - ${formattedHourEnd}`;
};
