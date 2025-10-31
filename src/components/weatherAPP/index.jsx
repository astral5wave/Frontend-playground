import React from "react";

const WeatherApp = () => {
  const [input, setInput] = React.useState("");
  const [info, setInfo] = React.useState(null);
  const [error, setError] = React.useState("");

  const handleSearch = async () => {
    if (!input.trim()) return;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${input}`
      );
      const data = await response.json();

      if (data.error) {
        setError("City not found. Try again.");
        setInfo(null);
        return;
      }

      const tempInfo = {
        cityName: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localTime: data.location.localtime,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        temperature: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        windDir: data.current.wind_dir,
        pressure: data.current.pressure_mb,
        visibility: data.current.vis_km,
      };

      setInfo(tempInfo);
      setError("");
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0f24] to-[#0b173d] p-6 text-white">
      <div className="w-full max-w-md bg-[#101a3a]/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-blue-800/40">
        <h1 className="text-3xl font-semibold text-center mb-6 text-blue-200 tracking-wide">
          Night Sky Weather
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-blue-700 bg-[#0e1630] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
          >
            Search
          </button>
        </div>

        {error && (
          <p className="text-center text-red-400 font-medium">{error}</p>
        )}

        {info && (
          <div className="mt-6 p-5 bg-[#0e1630]/80 rounded-xl shadow-md text-gray-200 border border-blue-800/30">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-100">
                  {info.cityName}, {info.country}
                </h2>
                <p className="text-sm text-gray-400">{info.region}</p>
                <p className="text-sm text-gray-400">{info.localTime}</p>
              </div>
              <img src={info.icon} alt={info.condition} className="w-16 h-16" />
            </div>

            <div className="mt-4">
              <p className="text-xl font-medium text-blue-200">
                {info.condition} • {info.temperature}°C
              </p>
              <p className="text-sm text-gray-400">
                Feels like: {info.feelsLike}°C
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-gray-300">
              <p>💧 Humidity: {info.humidity}%</p>
              <p>🌬 Wind: {info.windSpeed} km/h {info.windDir}</p>
              <p>👁 Visibility: {info.visibility} km</p>
              <p>📈 Pressure: {info.pressure} mb</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
