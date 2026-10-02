import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

export default function InfoBox({ info }) {
    // Dynamic sample image URLs based on weather conditions
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1000&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1516047486807-38ae056b7dd3?q=80&w=1000&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1000&auto=format&fit=crop";

    const cityName = info?.city || info?.City || "Unknown City";
    const isRain = info?.humidity > 80 || (info?.weather && info.weather.toLowerCase().includes("rain"));
    const isHot = info?.temp > 15;

    const imageUrl = isRain ? RAIN_URL : isHot ? HOT_URL : COLD_URL;
    const weatherCondition = isRain ? "Rainy" : isHot ? "Warm / Sunny" : "Cold";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 360, width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", overflow: "hidden", border: "1px solid #eef2f6" }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={imageUrl}
                        title={cityName}
                    />
                    <CardContent sx={{ padding: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 700, textTransform: "capitalize", display: "flex", alignItems: "center", gap: 1 }}>
                                {cityName}
                                {isRain ? (
                                    <ThunderstormIcon sx={{ color: "#1976d2" }} />
                                ) : isHot ? (
                                    <WbSunnyIcon sx={{ color: "#f57c00" }} />
                                ) : (
                                    <AcUnitIcon sx={{ color: "#0288d1" }} />
                                )}
                            </Typography>
                            <Chip 
                                label={weatherCondition} 
                                size="small" 
                                sx={{ 
                                    backgroundColor: isRain ? "#e3f2fd" : isHot ? "#fff3e0" : "#e1f5fe",
                                    color: isRain ? "#1565c0" : isHot ? "#e65100" : "#0277bd",
                                    fontWeight: 600,
                                    fontSize: "0.75rem"
                                }}
                            />
                        </Box>

                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, textTransform: "capitalize" }}>
                            <i>{info?.weather}</i>
                        </Typography>

                        <div className="weatherDetails">
                            <div className="detailRow">
                                <span>Temperature</span>
                                <span className="detailValue">{info?.temp}&deg;C</span>
                            </div>
                            <div className="detailRow">
                                <span>Humidity</span>
                                <span className="detailValue">{info?.humidity}%</span>
                            </div>
                            <div className="detailRow">
                                <span>Min Temp</span>
                                <span className="detailValue">{info?.tempMin}&deg;C</span>
                            </div>
                            <div className="detailRow">
                                <span>Max Temp</span>
                                <span className="detailValue">{info?.tempMax}&deg;C</span>
                            </div>
                            <div className="detailRow highlightRow">
                                <span>Feels Like</span>
                                <span className="detailValue">{info?.feelsLike}&deg;C</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}