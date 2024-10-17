import React from 'react';
import './Footer.css'; // Импорт CSS файла

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Новости</h4>
          <ul>
            <li><a href="#">Здравоохранение</a></li>
            <li><a href="#">Транспорт</a></li>
            <li><a href="#">Культура</a></li>
            <li><a href="#">Все новости</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Услуги</h4>
          <ul>
            <li><a href="#">Для жителей</a></li>
            <li><a href="#">Образование</a></li>
            <li><a href="#">Жилье, недвижимость, земля</a></li>
            <li><a href="#">Центры госуслуг</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Афиша</h4>
          <ul>
          <li><a href="#">Кино</a></li>
            <li><a href="#">Выставки</a></li>
            <li><a href="#">Спектакли</a></li>
            <li><a href="#">Концерты</a></li>
            <li><a href="#">Экскурсии</a></li>
            <li><a href="#">Все мероприятия</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Мой район</h4>
          <ul>
            <li><a href="#">Найти свой район</a></li>
            <li><a href="#">Центры госуслуг</a></li>
            <li><a href="#">Школы</a></li>
          </ul>
        </div>
      </div>

     

      <div className="footer-bottom">
      <div className="footer-social">
        <h4>Мы в соцсетях</h4>
        <ul className="social-icons">
          <li><a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a></li>
          <li><a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter" /></a></li>
          <li><a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a></li>
          <li><a href="#"><img src="./assets/VK Circled.png" alt="VK" /></a></li>
        </ul>
      </div>
      <div className="footer-info">
        
        <h4> Сайты Владивостока</h4>
          <a href="#">Авто</a>
          <a href="#">Афиша</a>
          <a href="#">Кино</a>
          <a href="#">Недвижимость</a>
          <a href="#">Базы отдыха</a>
          <a href="#">Новости</a>
          <a href="#">Объявления</a>
          <a href="#">Работа</a>
          <a href="#">Справочник компаний</a>


        </div>
        <div className="footer-copyright">
          <p>© ООО «Фарпост», 2003—2024</p>
          <p>При любом использовании материалов ссылка на <a href="https://www.VL.ru">VL.ru</a> обязательна.</p>
          <p>Цитирование в Интернете возможно только при наличии гиперссылки. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
