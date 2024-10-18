import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import './NewsSection.css'; 

const CinemaSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const newsItems = [
        {
            id: 1,
            title: 'Новость 1',
            content: 'Краткое содержание новости 1...',
            image: 'https://via.placeholder.com/200x100',
        },
        {
            id: 2,
            title: 'Новость 2',
            content: 'Краткое содержание новости 2...',
            image: 'https://via.placeholder.com/200x100',
        },
        {
            id: 3,
            title: 'Новость 3',
            content: 'Краткое содержание новости 3...',
            image: 'https://via.placeholder.com/200x100',
        },
        {
            id: 4,
            title: 'Новость 4',
            content: 'Краткое содержание новости 4...',
            image: 'https://via.placeholder.com/200x100',
        },
        {
            id: 5,
            title: 'Новость 5',
            content: 'Краткое содержание новости 5...',
            image: 'https://via.placeholder.com/200x100',
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
            <div className="small-news-blocks">
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
