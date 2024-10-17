import React, { useEffect, useState } from 'react';
import './Header.css'; // Подключаем CSS файл

const Header = () => {
  const [weather, setWeather] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({ usd: null, eur: null, cny: null });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Получение погоды
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Vladivostok&appid=d0934dee549d4dbd42cb3fe8ed6c7d16&units=metric`);
        if (!response.ok) {
          throw new Error("Ошибка при получении данных погоды");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Ошибка при получении погоды:", error);
      }
    };

    // Получение курсов валют
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/df27a859f390a59361f64b48/latest/RUB`);
        if (!response.ok) {
          throw new Error("Ошибка при получении данных валют");
        }
        const data = await response.json();
        setCurrencyRates({
          usd: 1 / data.conversion_rates.USD,
          eur: 1 / data.conversion_rates.EUR,
          cny: 1 / data.conversion_rates.CNY,
        });
      } catch (error) {
        console.error("Ошибка при получении курсов валют:", error);
      }
    };

    fetchWeather();
    fetchCurrencyRates();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Поиск по запросу: ${searchQuery}`);
  };

  return (
    <header>
      <div className="container">
        <h1 className="logo">VL.RU</h1>
        <div className="weather-currency">
          {weather ? (
            <div className="weather">
              <p className="weather-text">Погода: <strong>{weather.main?.temp}°C</strong></p>
            </div>
          ) : (
            <p>Загрузка погоды...</p>
          )}
          <div className="currency">
            <p className="currency-text">USD: <strong>{currencyRates.usd ? currencyRates.usd.toFixed(2) : 'Загрузка...'}</strong></p>
            <p className="currency-text">EUR: <strong>{currencyRates.eur ? currencyRates.eur.toFixed(2) : 'Загрузка...'}</strong></p>
            <p className="currency-text">CNY: <strong>{currencyRates.cny ? currencyRates.cny.toFixed(2) : 'Загрузка...'}</strong></p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Афиша</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск..."
            className="search-input"
          />
          <button type="submit" className="search-button">Найти</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
