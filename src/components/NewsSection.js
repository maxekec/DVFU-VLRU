import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import './NewsSection.css'; 
import news1 from './assets/news1.jpg';
import news2 from './assets/news2.jpg';
import news3 from './assets/news3.jpeg';
import news4 from './assets/news4.jpg';
import news5 from './assets/news5.jpg';

const CinemaSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const newsItems = [
        {
            id: 1,
            title: 'Новость 1',
            content: 'Краткое содержание новости 1...',
            image: news1,
        },
        {
            id: 2,
            title: 'Новость 2',
            content: 'Краткое содержание новости 2...',
            image: news2,
        },
        {
            id: 3,
            title: 'Новость 3',
            content: 'Краткое содержание новости 3...',
            image: news3,
        },
        {
            id: 4,
            title: 'Новость 4',
            content: 'Краткое содержание новости 4...',
            image: news4,
        },
        {
            id: 5,
            title: 'Новость 5',
            content: 'Краткое содержание новости 5...',
            image: news5,
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Реф для блока новостей
    const newsRef = useRef(null);

    // Обработчик прокрутки мышью
    const handleWheelScroll = (event) => {
        event.preventDefault();
        if (newsRef.current) {
            // Прокручиваем вертикально в зависимости от направления прокрутки
            newsRef.current.scrollBy({
                top: event.deltaY > 0 ? 100 : -100, // Прокручиваем на 100px
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="news-section">
            <div className="slider-container" data-aos="fade-up">
                <Slider {...sliderSettings}>
                    {newsItems.slice(0, 3).map(item => (
                        <div className="news-item" key={item.id}>
                            <img src={item.image} alt={item.title} className="news-image" />
                            <div className="news-item-content-overlay">
                                <h3 className="news-item-title">{item.title}</h3>
                                <p className="news-item-content">
                                    <a href="#">{item.content}</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div 
                className="small-news-blocks" 
                ref={newsRef} 
                onWheel={handleWheelScroll} // Добавляем обработчик прокрутки мышью
            >
                {newsItems.map(item => (
                    <div className="small-news-item" key={item.id} data-aos="zoom-in">
                        <img src={item.image} alt={item.title} className="small-news-image" />
                        <h4 className="small-news-item-title">{item.title}</h4>
                        <p className="small-news-item-content">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CinemaSection;
