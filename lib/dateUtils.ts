import moment from 'moment';
import 'moment/locale/vi';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function customDateFormat(defaultFormat: string): string {
  const weekdaysMap: { [key: string]: string } = {
    'T2': 'Thứ 2',
    'T3': 'Thứ 3',
    'T4': 'Thứ 4',
    'T5': 'Thứ 5',
    'T6': 'Thứ 6',
    'T7': 'Thứ 7',
  };

  const formattedWeekday = weekdaysMap[defaultFormat] || defaultFormat;

  // Capitalize the first letter of each word
  return formattedWeekday
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
}

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

export function convertToCustomDate(
  timezone: number,
  dt: number,
  weekdayFormat: "short" | "long",
): string {
  const momentUtc = moment.unix(dt);
  const momentLocal = momentUtc.utcOffset(timezone / 60);
  momentLocal.locale('vi');

  const formattedWeekday = momentLocal.format(weekdayFormat === 'short' ? 'ddd' : 'dddd');

  // Use customDateFormatConverter to convert the formatted weekday
  const customFormattedWeekday = customDateFormat(formattedWeekday);

  return customFormattedWeekday;
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
