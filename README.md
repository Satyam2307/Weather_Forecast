# Weather App

A modern, responsive React weather application built with Vite and Material-UI. It fetches real-time weather data using the OpenWeatherMap API and dynamically updates UI cards, backgrounds, and weather conditions.

## Features

- **Live Weather Data**: Search any city to view current temperature, min/max temperatures, humidity, and "feels like" metrics.
- **Dynamic Weather Cards**: Beautiful Unsplash imagery and Material-UI icons adapt dynamically based on weather conditions (warm/sunny, cold/snowy, and rainy).
- **Responsive & Clean UI**: Crisp light theme with Material-UI components.
- **Secure Environment Variables**: API keys configured via Vite environment variables and ignored in version control.

---

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Mini-Project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root of the project (you can duplicate `.env.example`):
```bash
cp .env.example .env
```
Open `.env` and add your OpenWeatherMap API key:
```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```
> You can generate a free API key at [OpenWeatherMap](https://openweathermap.org/api).

### 4. Run development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```
