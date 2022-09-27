import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import WeatherForecastChart from "./components/WeatherForecastChart";

function App() {
    return (
        <main>
            <SearchBar/>
            <Weather/>
            <WeatherForecastChart/>
        </main>
    );
}

export default App;
