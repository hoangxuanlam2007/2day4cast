export const getTenDayForecast = async ({
  lat,
  lon,
}: {
  lat: string
  lon: string
}) => {
  const data = await fetch(
    `http://${process.env.VERCEL_URL}/api/weather/daily_forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&lang=vi`
  )
  if (!data.ok) {
    throw new Error("Failed to fetch data")
  }

  return data.json()
}
