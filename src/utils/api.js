const API_KEY = 'a1820a1155cb4ef5a47173657221411';
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';

export async function getWeatherFromApi(city, days = 10, aqi = 'no', alerts = 'no') {
    const config = {
        key: API_KEY,
        q: city,
        days: days,
        aqi: aqi,
        alerts: alerts,
    }

    return await fetch(`${BASE_URL}?${new URLSearchParams(config)}`);
}