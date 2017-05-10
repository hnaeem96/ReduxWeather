const API_KEY = '5043076375508a87c12bf480aebc7a5a';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  return {
    type: FETCH_WEATHER
  };
}
