import { MsInTime } from "../types/types";

export const getTimeRemaining = (endtime: Date) => {

  const now = new Date();
  const difference = endtime.getTime() - now.getTime();

  const daysRemaining = getValidNumber(Math.trunc(difference / MsInTime.MS_IN_DAY));
  const hoursRemaining = getValidNumber(Math.trunc((difference / MsInTime.MS_IN_HOUR) % 24));
  const minutesRemaining = getValidNumber(Math.trunc((difference / MsInTime.MS_IN_MINUTE) % 60));

  return { difference, daysRemaining, hoursRemaining, minutesRemaining }
}

function getValidNumber(number: number) {
  if (number >= 0 && number < 10) return `0${number}`;
  else return `${number}`;
}
