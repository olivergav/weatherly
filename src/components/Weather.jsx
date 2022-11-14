function Weather({currentWeather: {temp_c, feelslike_c, condition, humidity, wind_dir, name, country}}){
    return (
        <div className="chart">
            <h2 className="chart__header">{name}, {country}</h2>
            <p className="chart__paragraph">Temperature: <strong>{temp_c}°C</strong></p>
            <p className="chart__paragraph">Feels like: <strong>{feelslike_c}°C</strong></p>
            <p className="chart__paragraph">Humidity: <strong>{humidity}%</strong></p>
            <p className="chart__paragraph">Wind direction: <strong>{wind_dir}</strong></p>
            <p className="chart__paragraph">Condition: <strong>{condition.text}</strong></p>
            <img src={condition.icon} alt="weather condition icon" className="chart__image"/>
        </div>
    )
}

export default Weather;