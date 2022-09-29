function Weather({currentWeather: {temp_c, feelslike_c, condition, humidity, wind_dir, name, country}}){
    return (
        <div style={{color: "white"}}>
            <h2>{name}, {country}</h2>
            <p>Temperature: {temp_c} °C</p>
            <p>Feelslike: {feelslike_c} °C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind direction: {wind_dir}</p>
            <p>Condition: {condition.text}</p>
            <img src={condition.icon} alt="weather condition icon"/>
        </div>
    )
}

export default Weather;