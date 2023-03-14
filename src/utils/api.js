const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

export async function getWeatherFromApi(apiKey, options, city, days = 10, aqi = 'no', alerts = 'no') {

    const config = {
        key: apiKey,
        q: city,
        days: days,
        aqi: aqi,
        alerts: alerts,
    }

    return await fetch(`${BASE_URL}?${new URLSearchParams(config)}`, options);
}