import {useState, useContext} from "react";
import {getWeatherFromApi} from "./utils/api";
import apiKeyContext from "./context/apiKeyContext";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Weather from "./components/Weather";
import WeatherForecastChart from "./components/WeatherForecastChart";

import "./styles/main.scss";


function App() {
    const [searchValue, setSearchValue] = useState('');
    const [forecastData, setForecastData] = useState({});
    const [displayData, setDisplayData] = useState(false);
    const [statusMessage, setStatusMessage] = useState(0);
    const { apiKey } = useContext(apiKeyContext);

    const statusMessages = ['Loading...', 'Something went wrong. Try again!']

    async function handleSearch(event) {
        event.preventDefault();
        const controller = new AbortController();
        const signal = controller.signal;

        setDisplayData(true);

        const response = await getWeatherFromApi(apiKey, {signal}, searchValue, 7);

        if (response.status !== 200) {
            setStatusMessage(1);
            throw new Error('Something went wrong with API Call!')
        }
        
        const data = await response.json()

        setForecastData(data);
        setSearchValue('');

        return () => {
            controller.abort();
        }
    }

    return (
        <main className="App">
            <Header/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}
                       setStatusMessage={setStatusMessage}/>

            {displayData && (
                !!Object.keys(forecastData).length ? (
                    <>
                        <Weather currentWeather={{...forecastData.current, ...forecastData.location}}/>
                        <WeatherForecastChart forecast={forecastData.forecast.forecastday}/>
                    </>
                ) : (
                    <h2 className='header'>{statusMessages[statusMessage]}</h2>
                )
            )}
        </main>
    );
}

export default App;
