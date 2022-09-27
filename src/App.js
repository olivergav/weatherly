import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import WeatherForecastChart from "./components/WeatherForecastChart";

import "./styles/main.scss";

function App() {
    return (
        <main className="App">
            <SearchBar/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;
