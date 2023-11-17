export function convertToDate(
  timezone: number,
  dt: number,
  weekdayFormat: "short" | "long",
): string {
  let utc_time = new Date(dt * 1000)
  let local_time = new Date(utc_time.getTime() + timezone * 1000)

  const options = { weekday: weekdayFormat }
  const dateFormatter = new Intl.DateTimeFormat("vi-VN", options)

  return dateFormatter.format(local_time)
}

export function formatSunTime(
  timestamp: number,
  timezoneOffset: number
): string {
  const date = new Date((timestamp + timezoneOffset) * 1000)
  const formattedTime = new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date)
  return formattedTime
}
