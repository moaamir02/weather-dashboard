const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL;

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=5`
    );
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
