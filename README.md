Here's an improved version of the `README.md` file for your weather forecasting application:

---

# Weather Forecasting App

This Weather Forecasting app provides current and 5-day weather forecasts for cities worldwide. Users can search for cities, toggle between Celsius and Fahrenheit, and add cities to their favorites list. Built with **React** and **Tailwind CSS**, the app fetches weather data from the **OpenWeatherMap API**.

## Features

- **City Search**: Search for cities to get their weather forecast.
- **Temperature Toggle**: Switch between Celsius and Fahrenheit.
- **Favorites**: Save favorite cities for quick access.
- **Local Storage**: Remembers the last searched city and preferred temperature unit.

## Technologies Used

- **React** for building the UI
- **Tailwind CSS** for styling
- **OpenWeatherMap API** for weather data
- **JSON Server** for managing favorites (stored locally)

## Getting Started

1. **Clone the Repository**:

   ```bash
   git remote add origin https://github.com/moaamir02/weather-dashboard.git
   cd weather-forecasting-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
VITE_WEATHER_API_KEY=b19c5dc736d04948a5922302240711
VITE_WEATHER_API_BASE_URL=https://api.weatherapi.com/v1
VITE_JSON_SERVER_URL=http://localhost:3000



4. **Get an API Key from OpenWeatherMap**:

   - Sign up at [OpenWeatherMap](https://www.weatherapi.com) and generate an API key.
   - Replace `YOUR_API_KEY` in the `.env` file with your generated API key.



5. **Run JSON Server** (for managing favorites locally):

   ```bash
   npx json-server --watch db.json --port 3001
   ```

6. **Start the Application**:

   ```bash
   npm run dev
   ```

   This will start the app on `http://localhost:5173` (or another port if specified).

### Usage

- **Search** for a city to see its current weather and forecast.
- **Toggle** temperature units between Celsius and Fahrenheit.
- **Add** cities to your favorites for quick access.
- **Select** a favorite city to view its weather data.

## Project Structure

```
weather-forecasting-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── WeatherDashboard.jsx    # Main dashboard layout
│   │   ├── Search.jsx              # City search component
│   │   ├── WeatherDisplay.jsx      # Current weather and forecast component
│   │   └── Favorites.jsx           # Favorite cities management component
│   ├── services/
│   │   ├── api.js                  # OpenWeatherMap API integration
│   │   └── jsonServer.js           # JSON server CRUD operations
│   ├── App.jsx                     # Main App component
│   ├── index.jsx
├── .env                            # Environment variables (API key, JSON server URL)
├── db.json     
|___index.html                    # JSON server database for favorite cities
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation
```

## Submission

Provide the source code in a GitHub repository. Make sure to include this `README.md` file with instructions for running the application and obtaining an API key from OpenWeatherMap.