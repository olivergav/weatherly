const API_KEY = 'fed2a52dec6641f881a140300222909';
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

export async function getWeatherFromApi(city, days = 10, aqi = 'no', alerts = 'no') {
    const config = {
        key: API_KEY,
        q: city,
        days: days,
        aqi: aqi,
        alerts: alerts,
    }
    console.log(`${BASE_URL}?${new URLSearchParams(config)}`)

    const response = await fetch(`${BASE_URL}?${new URLSearchParams(config)}`);

    if (response.status !== 200) {
        throw new Error('Something went wrong with API Call')
    }

    return await response.json();
}