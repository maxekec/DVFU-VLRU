import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">



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
            <li><a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="https://t.me/newsvlru" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram-plane"></i></a></li>
            <li><a href="https://vk.com/news_vlru?from=search" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a></li>
          </ul>
        </div>

        <div className="footer-info">

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
