// src/components/RecreationCenters.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import './RecreationCenters.css'; // Import CSS for the component
import image1 from './assets/buhta1.jpg';
import image2 from './assets/buhta2.jpg';
import image3 from './assets/buhta3.jpg';
import image4 from './assets/buhta4.jpg';

const RecreationCenters = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Example recreation center data
    const centers = [
        {
            name: 'Кибер база',
            description: 'Комфортные номера с интернетом и развлекательными программами.',
            image: image1,
            rating: 4.5,
            price: '5000₽/ночь',
        },
        {
            name: 'Dubki Glamping',
            description: 'Глэмпинг в живописной природе с удобствами.',
            image: image2,
            rating: 4.8,
            price: '7000₽/ночь',
        },
        {
            name: 'Tiny House',
            description: 'Уютный домик для двоих с красивым видом.',
            image: image3,
            rating: 4.6,
            price: '4500₽/ночь',
        },
        {
            name: 'Алые паруса',
            description: 'Современные условия и прекрасный вид на море.',
            image: image4,
            rating: 4.7,
            price: '6000₽/ночь',
        },
    ];

    return (
        <div className="recreation-centers">
            <h2 className="centers-title" data-aos="fade-up">Базы отдыха Владивостока</h2>

            <div className="centers-list">
                {centers.map((center, index) => (
                    <div className="center-card" key={index} data-aos="fade-up">
                        <div className="center-image-container">
                            <img src={center.image} alt={center.name} className="center-image" />
                        </div>
                        <div className="center-details">
                            <h3>{center.name}</h3>
                            <p className="description">{center.description}</p>
                            <div className="center-info">
                                <span className="rating">★ {center.rating}</span>
                                <span className="price">{center.price}</span>
                            </div>
                            <button className="more-info-button">Подробнее</button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Link to view all recreation centers */}
            <a href="/all-recreation-centers" className="view-all-link" data-aos="fade-up">
                Смотреть все базы отдыха
            </a>
        </div>
    );
};

export default RecreationCenters;
