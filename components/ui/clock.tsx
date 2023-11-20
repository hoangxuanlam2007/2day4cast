"use client"

import { useEffect, useState } from "react"

interface ClockProps {
  initial: Date
  timezone: number
}

export default function Clock({ initial, timezone }: ClockProps) {
  const [time, setTime] = useState(calculateLocalTime(initial, timezone))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateLocalTime(new Date(), timezone))
    }, 1000)

    return () => clearInterval(timer)
  }, [timezone])

  function calculateLocalTime(initialTime: Date, offsetSeconds: number): Date {
    // Calculate the local time by adjusting the initial time with the offset
    const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000)
    return localTime
  }

  return (
    <div className="tabular-nums">
      {(() => {
        const formattedTime = time.toLocaleTimeString("vi-VN", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
  
        const hour = parseInt(formattedTime.split(":")[0], 10);
  
        return `${formattedTime} ${hour <= 13 ? 'AM' : 'PM'}`;
      })()}
    </div>
  );
}
