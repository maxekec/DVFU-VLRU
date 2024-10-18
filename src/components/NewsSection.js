import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'aos/dist/aos.css'; // Import AOS for animations
import AOS from 'aos'; // Import AOS for animations
import './NewsSection.css'; // Import CSS for NewsSection

const NewsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Sample slides with static content
    const slides = [
        {
            id: 1,
            title: 'News Block 1',
            description: 'This is a description of news block 1. It contains important information.',
        },
        {
            id: 2,
            title: 'News Block 2',
            description: 'This is a description of news block 2. Stay tuned for updates.',
        },
        {
            id: 3,
            title: 'News Block 3',
            description: 'This is a description of news block 3. Don’t miss out!',
        },
        {
            id: 4,
            title: 'News Block 4',
            description: 'This is a description of news block 4. Exciting news coming soon.',
        },
        {
            id: 5,
            title: 'News Block 5',
            description: 'This is a description of news block 5. Check back for more details.',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                },
            },
        ],
    };

    return (
        <div className="news-section">
            <h2>Latest News</h2>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} data-aos="fade-up" className="slide-container">
                        <div className="shape circle"></div>
                        <div className="shape triangle"></div>
                        <div className="design-block">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                        <div className="preview">
                            <p>Preview of {slide.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NewsSection;
