function GoogleWeatherForecastChart(forecast) {

    return (
        <>
            <pre>{JSON.stringify(forecast, null, 2)}</pre>
        </>
    );
}

export default GoogleWeatherForecastChart;


