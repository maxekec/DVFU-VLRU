import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './assets/VLRU.jpg'; // Импортируем логотип
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faDollarSign, faEuroSign, faYenSign, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [weather, setWeather] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({ usd: null, eur: null, cny: null });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
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
    setSearchVisible(false);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} alt="Логотип" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Афиша</a></li>
            <li><a href="#">Транспорт</a></li>
            <li><a href="#">Помощь</a></li>
          </ul>
        </nav>
        <div className="right-corner">
          <div className="weather-currency">
            {weather ? (
              <div className="weather">
                <FontAwesomeIcon icon={faSun} className="weather-icon" />
                <p className="weather-text">{Math.round(weather.main?.temp)}°C</p>
              </div>
            ) : (
              <p className="loading-text">Загрузка погоды...</p>
            )}
            <div className="currency">
              <div className="currency-item">
                <FontAwesomeIcon icon={faDollarSign} className="currency-icon" />
                <p className="currency-text">USD: <strong>{currencyRates.usd ? currencyRates.usd.toFixed(2) : 'Загрузка...'}</strong></p>
              </div>
              <div className="currency-item">
                <FontAwesomeIcon icon={faEuroSign} className="currency-icon" />
                <p className="currency-text">EUR: <strong>{currencyRates.eur ? currencyRates.eur.toFixed(2) : 'Загрузка...'}</strong></p>
              </div>
              <div className="currency-item">
                <FontAwesomeIcon icon={faYenSign} className="currency-icon" />
                <p className="currency-text">CNY: <strong>{currencyRates.cny ? currencyRates.cny.toFixed(2) : 'Загрузка...'}</strong></p>
              </div>
            </div>
          </div>
          <div className="search-container">
            <button className="search-icon" onClick={() => setSearchVisible(!searchVisible)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            {searchVisible && (
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
            )}
          </div>
          <button className="login-button">Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
