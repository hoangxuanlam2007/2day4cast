import moment from 'moment';
import 'moment/locale/vi';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function convertToDate(
  timezone: number,
  dt: number,
  weekdayFormat: "short" | "long",
): string {
  const momentUtc = moment.unix(dt);
  const momentLocal = momentUtc.utcOffset(timezone / 60);
  momentLocal.locale('vi');

  let formattedWeekday = momentLocal.format(weekdayFormat === 'short' ? 'ddd' : 'dddd');

  // Capitalize the first letter of each word
  formattedWeekday = formattedWeekday
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');

  return formattedWeekday;
}

export function formatSunTime(
  timestamp: number,
  timezoneOffset: number
): string {
  const date = new Date((timestamp + timezoneOffset) * 1000)
  const formattedTime = new Intl.DateTimeFormat("vi-VN", {
    timeZone: "UTC",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  }).format(date)
  return formattedTime
}
