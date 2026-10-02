import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const getWeatherInfo = async (cityName) => {
        try {
            const response = await fetch(
                `${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error(`Weather API error: ${response.status}`);
            }

            const jsonResponse = await response.json();

            const result = {
                city: cityName,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (err) {
            console.error("Error fetching weather info:", err);
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
        if (error) setError(false);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!city.trim()) return;

        try {
            setError(false);
            const newinfo = await getWeatherInfo(city.trim());
            if (newinfo) {
                updateInfo(newinfo);
                setCity("");
            }
        } catch {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} className="searchForm">
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    size="small"
                    required
                    value={city}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? "No such place found in API!" : ""}
                    sx={{ width: { xs: "100%", sm: "280px" } }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    startIcon={<SearchIcon />}
                    sx={{
                        height: "40px",
                        backgroundColor: "#1976d2",
                        "&:hover": { backgroundColor: "#1565c0" },
                        textTransform: "none",
                        fontWeight: 600,
                        boxShadow: "0 2px 8px rgba(25, 118, 210, 0.25)"
                    }}
                >
                    Search
                </Button>
            </form>
        </div>
    );
}