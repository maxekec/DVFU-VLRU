import React, { useState } from 'react';
import './LoviKupon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStethoscope, faUmbrellaBeach, faDumbbell, faChild, faCar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import image1 from './assets/kupon1.jpg';
import image2 from './assets/kupon2.png';
import image3 from './assets/kupon3.jpg';
import image4 from './assets/kupon4.jpg';
import image5 from './assets/kupon5.jpg';
import image6 from './assets/kupon6.jpg';
import image7 from './assets/kupon7.jpg';
import image8 from './assets/kupon8.jpg';
import image9 from './assets/kupon9.jpg';
import image10 from './assets/kupon10.jpg';
import image11 from './assets/kupon11.jpg';
import image12 from './assets/kupon12.jpg';
import image13 from './assets/kupon13.jpg';
import image14 from './assets/kupon14.jpg';
import image15 from './assets/kupon15.jpg';
import image16 from './assets/kupon16.jpg';
import image17 from './assets/kupon17.jpg';
import image18 from './assets/kupon18.jpg';
import image19 from './assets/kupon19.jpg';
import image20 from './assets/kupon20.jpg';
import image21 from './assets/kupon21.jpg';

const LoviKupon = () => {
    const categories = [
        { icon: faHeart, label: 'Красота' },
        { icon: faStethoscope, label: 'Здоровье' },
        { icon: faUmbrellaBeach, label: 'Отдых' },
        { icon: faDumbbell, label: 'Спорт' },
        { icon: faChild, label: 'Детям' },
        { icon: faCar, label: 'Авто' },
        { icon: faGraduationCap, label: 'Обучение' },
    ];

    const kuponData = [
        [
            { image: image1, description: '65% скидка на окрашивание ресниц, 55% на ламинирование ресниц, 50% на наращивание ресниц, ламинирование бровей!', link: '#' },
            { image: image2, description: 'Озубенный розыгрыш — выиграй 50 000 рублей на красивую улыбку!', link: '#' },
        ],
        [
            { image: image3, description: '55% скидка на профессиональную гигиену полости рта, 50% скидка на лечение кариеса!', link: '#' },
            { image: image4, description: '50% скидка на УЗИ органов брюшной полости и гинекологическое, кольпоскопия, прием эндокринолога и терапевта!', link: '#' },
            { image: image5, description: '50% скидка на УЗ-чистку, механическую, 9-этапную комбинированную чистку лица, карбокситерапию, пилинг срединный Medicare!', link: '#' },
        ],
        [
            { image: image6, description: '50% скидка на аренду дома в будние и выходные дни!', link: '#' },
            { image: image7, description: '50% скидка на аренду бани и чана в глэмпинг-парке!', link: '#' },
            { image: image8, description: '50% скидка на аренду коттеджей на базе отдыха!', link: '#' },
            { image: image9, description: '50% скидка на спа-программы — «Шоколадный восторг», «Медовая антицеллюлитная программа», «Сказочный Таиланд», «Афродита», «Аполлон» и другое!', link: '#' },
        ],
        [
            { image: image10, description: '50% скидка на занятия по растяжке и акробатике!', link: '#' },
            { image: image11, description: '75% на разовое занятие по айкидо, 50% скидка на групповые занятия по айкидо для взрослых!', link: '#' },
            { image: image12, description: '50% скидка на пробную тренировку, разовое посещение и абонементы на занятия мягким фитнесом и растяжкой!', link: '#' },
        ],
        [
            { image: image13, description: '50% скидка на посещение лаборатории виртуальной реальности!', link: '#' },
            { image: image14, description: '50% скидка на диагностику и консультацию нейропсихолога для детей!', link: '#' },
            { image: image15, description: '60% скидка на обучение в «Школе всестороннего развития для детей и взрослых»!', link: '#' },
            { image: image16, description: '50% скидка на дополнительные групповые занятия по школьным предметам для учащихся 9−11 классов!', link: '#' },
        ],
        [
            { image: image17, description: '50% скидка на прокат McLaren!', link: '#' },
            { image: image18, description: '25% скидка на автошколу ВВГУ!', link: '#' },
            { image: image19, description: '10% на покупку Probox!', link: '#' },
        ],
        [
            { image: image20, description: '50% скидка на макияж любой сложности и обучение макияжу!', link: '#' },
            { image: image21, description: '80% скидка на мастер-классы по основам живописи и цветоведения, арт-терапии и интуитивной живописи для детей от 6 лет и взрослых!', link: '#' },
        ],
    ];

    const [selectedKupon, setSelectedKupon] = useState(null);
    const [fadeClass, setFadeClass] = useState('fade-in');
    const [hoveredIndex, setHoveredIndex] = useState(null); // Состояние для отслеживания наведения

    const handleIconClick = (index) => {
        if (selectedKupon === index) {
            setFadeClass('fade-out');
            setTimeout(() => {
                setSelectedKupon(null);
                setFadeClass('fade-in'); // Сбрасываем класс для плавного появления
            }, 500); // Задержка для исчезновения
        } else {
            setFadeClass('fade-out');
            setTimeout(() => {
                setSelectedKupon(index);
                setFadeClass('fade-in');
            }, 500); // Задержка для исчезновения
        }
    };

    const limitText = (text, limit) => {
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };

    return (
        <div className="lovi-kupon-container" data-aos="zoom-in" data-aos-duration="1500">
            <h1 className="title">ЛовиКупон — Скидки во Владивостоке</h1>

            <div className="icons-container">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="icon-container" 
                        onClick={() => handleIconClick(index)}
                        onMouseEnter={() => setHoveredIndex(index)} // Устанавливаем индекс при наведении
                        onMouseLeave={() => setHoveredIndex(null)} // Сбрасываем индекс при уходе курсора
                    >
                        <div className="icon">
                            <FontAwesomeIcon icon={category.icon} className="category-icon" />
                        </div>
                        <span className={`icon-label ${hoveredIndex === index ? 'orange' : ''}`}>
                            {category.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Карточки со скидками */}
            <div className={`kupon-display ${fadeClass}`}>
                {selectedKupon !== null && (
                    <div className="kupon-list">
                        {kuponData[selectedKupon].map((kupon, idx) => (
                            <div key={idx} className="kupon-card">
                                <img src={kupon.image} alt="Kupon" className="kupon-image" />
                                <p>{limitText(kupon.description, 50)}</p> {/* Ограничение по символам */}
                                <a href={kupon.link} className="more-details">Подробнее</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoviKupon;
