import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 25.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };

    return (
        <div className="weatherAppContainer">
            <h1 className="weatherAppTitle">
                <WbCloudyIcon sx={{ fontSize: 36, color: "#1976d2" }} />
                <span>Weather App</span>
            </h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}