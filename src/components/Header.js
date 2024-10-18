import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './assets/VLRU.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faDollarSign, faEuroSign, faYenSign } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({ usd: null, eur: null, cny: null });
  const [currentTime, setCurrentTime] = useState(new Date());

  // Получение данных о погоде и курсах валют
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Vladivostok&appid=d0934dee549d4dbd42cb3fe8ed6c7d16&units=metric`
        );
        if (!response.ok) throw new Error("Weather fetch error");
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/df27a859f390a59361f64b48/latest/RUB`
        );
        if (!response.ok) throw new Error("Currency fetch error");
        const data = await response.json();
        setCurrencyRates({
          usd: 1 / data.conversion_rates.USD,
          eur: 1 / data.conversion_rates.EUR,
          cny: 1 / data.conversion_rates.CNY,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
    fetchCurrencyRates();
  }, []);

  // Обновление времени каждую секунду
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Обновляем каждую секунду

    return () => clearInterval(intervalId); // Очищаем интервал при размонтировании
  }, []);

  // Форматирование времени для Владивостока
  const vladivostokTime = currentTime.toLocaleString('ru-RU', {
    timeZone: 'Asia/Vladivostok',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    setSearchVisible(false); // Закрытие поиска после отправки
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="nav-menu">
            <ul>
              <li><a href="и">Новости</a></li>
              <li><a href="#">Услуги</a></li>
              <li><a href="#">Афиша</a></li>
              <li><a href="#">Авто на Дроме</a></li>
              <li><a href="#">FarPost - объявления</a></li>
            </ul>
          </nav>
        </div>

        <div className="info-container right-section">
          
          <button
            className="search-icon"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </header>

      {/* Блок с информацией (погода и курсы) */}
      <div className="info-box">
        {weather && (
          <div className="weather-info">
            <FontAwesomeIcon icon={faSun} />
            <span>{Math.round(weather.main.temp)}°C</span>
            <span>{weather.name}</span>
          </div>
        )}
        <div className="currency-info">
          <div>
            <FontAwesomeIcon icon={faDollarSign} />
            <span>{currencyRates.usd?.toFixed(2)}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEuroSign} />
            <span>{currencyRates.eur?.toFixed(2)}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faYenSign} />
            <span>{currencyRates.cny?.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Оверлей для поиска */}
      <div className={`search-overlay ${searchVisible ? 'active' : ''}`}>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Введите запрос..."
            autoFocus
          />
          <button type="submit">Найти</button>
        </form>
      </div>
    </>
  );
};

export default Header;
