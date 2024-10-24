import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; 
import './NewsSection.css';
import news1 from './assets/news1.jpg'; 
import news2 from './assets/news2.jpg';
import news3 from './assets/news3.jpeg';
import news4 from './assets/news4.jpg';
import news5 from './assets/news5.jpg';
import news6 from './assets/news6.jpg';
import news7 from './assets/news7.jpg';
import news8 from './assets/news8.jpg';
import news9 from './assets/news9.jpg';

const NewsSection = () => {
    const newsItems = [
        {
            id: 1,
            title: 'Золотой мост',
            content: 'Серьезное ДТП',
            image: news1,
        },
        {
            id: 2,
            title: 'Сильные пробки в центре',
            content: '10 баллов!',
            image: news2,
        },
        {
            id: 3,
            title: 'Тут плавать нельзя',
            content: 'Ну если только чуть-чуть',
            image: news3,
        },
        {
            id: 4,
            title: 'Лето в самом разгаре',
            content: 'Очень много людей',
            image: news4,
        },
        {
            id: 5,
            title: 'Крутой дом',
            content: 'Построили в каком-то там году',
            image: news5,
        },
        {
            id: 6,
            title: 'Потрясающий вид',
            content: 'Вот они, Чебоксары...',
            image: news6,
        },
        {
            id: 7,
            title: 'Хороший город',
            content: 'Ну тут не докопаться',
            image: news7,
        },
        {
            id: 8,
            title: 'Прикольная арка',
            content: 'Проход 1000 рублей',
            image: news8,
        },
        {
            id: 9,
            title: 'Великолепие',
            content: 'Погода отличная',
            image: news9,
        },
    ];

    const vacanciesItems = [
        {
            id: 1,
            title: 'Продавец-кассир Бубля',
            content: '30 000₽ - 50 000₽',
            image: news2,
        },
        {
            id: 2,
            title: 'Фотограф начинающий',
            content: '25 000₽ - 35 000₽',
            image: news3,
        },
        {
            id: 3,
            title: 'Консультант М.Видео',
            content: '35 000₽ - 55 000₽',
            image: news4,
        },
        {
            id: 4,
            title: 'Парикмахер Нечаевский',
            content: '5000₽ - 8000₽',
            image: news5,
        },
    ];

   
    const recentNewsItems = [
        {
            id: 101, 
            title: 'Обновление сайта',
            content: 'Сайт обновился до новой версии!',
            image: news1,
        },
        {
            id: 102,
            title: 'Погодные условия',
            content: 'Ожидаются дожди в ближайшие дни.',
            image: news2,
        },
        {
            id: 103,
            title: 'Новые правила',
            content: 'Введены новые правила дорожного движения.',
            image: news3,
        },
        {
            id: 104,
            title: 'Спорт',
            content: 'Наши спортсмены завоевали медали.',
            image: news4,
        },
        {
            id: 105,
            title: 'Культура',
            content: 'Газманов приезжает завтра!',
            image: news5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0); 
    const [fade, setFade] = useState(false); 

    // Функция для смены новости
    const changeNews = () => {
        setFade(true); 
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % recentNewsItems.length); 
            setFade(false); 
        }, 750); 
    };

    
    useEffect(() => {
        const interval = setInterval(changeNews, 7000); 
        return () => clearInterval(interval); 
    }, []);

    // Настройки слайдера
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        vertical: true, 
        verticalSwiping: true,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 7000, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const noWaterHouses = [
        {
            id: 1,
            title: 'Дома без горячей воды',
            content: '50 домов.',
        },
        {
            id: 2,
            title: 'Дома без холодной воды',
            content: '30 домов.',
        },
    ];

    return (
        <div className="news-section">
            {/* Вертикальный блок с главной новостью */}
            <div className="main-news" data-aos="fade-right" data-aos-duration="1500">
                <div className="main-news-image-container">
                    <img src={newsItems[0].image} alt={newsItems[0].title} className="main-news-image" />
                    <div className="main-news-content-overlay">
                        <h2 className="main-news-title">{newsItems[0].title}</h2>
                        <p className="main-news-description">{newsItems[0].content}</p>
                    </div>
                </div>
                <div className="small-news-blocks" data-aos="zoom-in" data-aos-duration="1500">
                    {newsItems.slice(1, 3).map(item => (
                        <div className="small-news-item" key={item.id}>
                            <h4 className="small-news-title">{item.title}</h4>
                            <p className="small-news-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Центральный блок с изображением и текстом */}
            <div className="center-image-block" data-aos="fade-down" data-aos-duration="2000">
                <div className={`central-image-container ${fade ? 'fade' : ''}`}>
                    <img src={recentNewsItems[currentIndex].image} alt={recentNewsItems[currentIndex].title} className="central-image" />
                    <div className="central-image-content-overlay">
                        <h2 className="central-image-title">{recentNewsItems[currentIndex].title}</h2>
                        <p className="central-image-description">{recentNewsItems[currentIndex].content}</p>
                    </div>
                </div>
            </div>

            {/* Контейнер для актуальных новостей с дополнительными контейнерами */}
            <div className="recent-news" data-aos="fade-left" data-aos-duration="2500">
                <h3>Актуальное</h3>
                <div className="recent-news-slider" style={{ height: '300px' }}>
                    <Slider {...sliderSettings}>
                        {recentNewsItems.map(item => (
                            <div className="recent-news-item" key={item.id}>
                                <h4 className="recent-news-title">{item.title}</h4>
                                <p className="recent-news-content">{item.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Дополнительный контейнер для вакансий */}
                <h3>Вакансии</h3>
                <div className="vacancies-slider" style={{ height: '300px' }}>
                    <Slider {...sliderSettings}>
                        {vacanciesItems.map(item => (
                            <div className="recent-news-item" key={item.id}>
                                <h4 className="recent-news-title">{item.title}</h4>
                                <p className="recent-news-content">{item.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Контейнер для домов без воды с одним слайдером */}

                <div className="no-water-slider" style={{ height: '300px' }}>
                    <Slider {...sliderSettings}>
                        {noWaterHouses.map(item => (
                            <div className="no-water-item" key={item.id}>
                                <h4 className="no-water-title">{item.title}</h4>
                                <p className="no-water-content">{item.content}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
