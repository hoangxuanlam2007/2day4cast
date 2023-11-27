import { Location } from "./types"

export const DEFAULT_LOCATION: Location = {
  city: "Hà Nội",
  coord: {
    lat: "21.1167",
    lon: "105.8833",
  },
}

export const DEFAULT_SUGGESTIONS = [
  {
    description: "London, Vương quốc Anh",
  },
  {
    description: "Paris, Pháp",
  },
  {
    description: "Amsterdam, Hà Lan",
  },
  {
    description: "Dublin, Ireland",
  },
  {
    description: "Lisbon, Bồ Đào Nha",
  },
]

export const OTHER_LARGE_CITIES = [
  {
    city: "New York",
    country: "Hoa kỳ",
    coord: {
      lat: 40.7127753,
      lon: -74.0059728,
    },
  },
  {
    city: "Thượng Hải",
    country: "Trung Quốc",
    coord: {
      lat: 31.2222226,
      lon: 121.458069,
    },
  },
  {
    city: "Tokyo",
    country: "Nhật Bản",
    coord: {
      lat: 35.6764225,
      lon: 139.650027,
    },
  },
  {
    city: "Sydney",
    country: "Úc",
    coord: {
      lat: -33.8688197,
      lon: 151.2092955,
    },
  },
  {
    city: "São Paulo",
    country: "Brazil",
    coord: {
      lat: -23.5475493,
      lon: -46.6358888,
    },
  },
]
