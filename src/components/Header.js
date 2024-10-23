import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import './Header.css';
import logo from './assets/VLRU.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faDollarSign, faEuroSign, faYenSign, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate(); // Инициализируем useNavigate
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [weather, setWeather] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({ usd: null, eur: null, cny: null });
  const [currentTime, setCurrentTime] = useState(new Date());

  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vladivostok?unitGroup=metric&key=F5YYH7ZXKABDPPB4GJE9RRN4M&contentType=json`
        );
        if (!response.ok) throw new Error("Weather fetch error");
        const data = await response.json();
        setWeather({
          main: { temp: data.currentConditions.temp },
          name: data.address,
        });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/cb4fd87d1892bc7322eb5dff/latest/RUB`
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setDropdownVisible(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    if (dropdownVisible === menu) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(menu);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    setSearchVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-container');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <img 
            src={logo} 
            alt="Logo" 
            className="logo" 
            onClick={() => navigate('/')} // Добавляем функцию навигации
            style={{ cursor: 'pointer' }} // Курсор меняется на указатель
          />
          <nav className="nav-menu" ref={menuRef}>
            <ul>
              <li>
                <a 
                  onClick={() => toggleDropdown('news')} 
                  href="#" 
                  className={dropdownVisible === 'news' ? 'active' : ''}
                >
                  Новости <FontAwesomeIcon icon={faChevronDown} />
                </a>
                <div className={`dropdown-menu ${dropdownVisible === 'news' ? 'visible' : ''}`} ref={dropdownRef}>
                  <ul>
                    <li><a href="#">Последние новости</a></li>
                    <li><a href="#">Популярные статьи</a></li>
                    <li><a href="#">Политика</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a 
                  onClick={() => toggleDropdown('services')} 
                  href="#" 
                  className={dropdownVisible === 'services' ? 'active' : ''}
                >
                  Разделы <FontAwesomeIcon icon={faChevronDown} />
                </a>
                
                <div className={`dropdown-menu ${dropdownVisible === 'services' ? 'visible' : ''}`} ref={dropdownRef}>
                  <ul>
                    <li><a href="VLRU">Базы отдыха</a></li>
                    <li><a href="#">Недвижимость</a></li>
                    <li><a href="#">ТВ-Программа</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a 
                  onClick={() => toggleDropdown('poster')} 
                  href="#" 
                  className={dropdownVisible === 'poster' ? 'active' : ''}
                >
                  Афиша <FontAwesomeIcon icon={faChevronDown} />
                </a>
                
                <div className={`dropdown-menu ${dropdownVisible === 'poster' ? 'visible' : ''}`} ref={dropdownRef}>
                  <ul>
                    <li><a href="/afishi">Концерты</a></li>
                    <li><a href="/afishi">Театры</a></li>
                    <li><a href="/afishi">Фестивали</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#">Авто на Дроме</a></li>
              <li><a href="#">FarPost - объявления</a></li>
            </ul>
          </nav>
        </div>

        {/* Добавляем сюда контейнер с погодой и валютами */}
        <div className="info-container right-section">
          <div className="weather-info">
            {weather && (
              <>
                <FontAwesomeIcon icon={faSun} />
                <span>{Math.round(weather.main.temp)}°C</span>
                <span>{weather.name}</span>
              </>
            )}
          </div>
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

          {/* Поле поиска */}
          <button
            className="search-icon"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <div className={`search-overlay ${searchVisible ? 'active' : ''}`}>
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
              />
              <button type="submit">Найти</button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
