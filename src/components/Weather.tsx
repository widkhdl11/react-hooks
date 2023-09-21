import axios from "axios";
import { FC, useEffect, useState } from "react";
import { AiFillCloud } from "react-icons/ai";

interface POSITION {
  latitude: number;
  longitude: number;
}

const WeatherIcons: any = {
  "04": <AiFillCloud />,
};

const Weather: FC = () => {
  const [position, setPosition] = useState<POSITION>();
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((_position) => {
      setPosition({
        latitude: _position.coords.latitude,
        longitude: _position.coords.longitude,
      });
    });
  }, []);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position?.latitude}&lon=${position?.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );

      setWeather(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!position) return;

    getWeather();
  }, [position]);

  return (
    <div>
      {weather && WeatherIcons[weather.weather[0].icon.substring(0, 2)]}
    </div>
  );
};

export default Weather;
