// src/components/RecreationCenters.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Импорт стилей AOS
import AOS from 'aos'; // Импорт библиотеки AOS
import './RecreationCenters.css'; // Импорт CSS для компонента
import image1 from './assets/buhta1.jpg';
import image2 from './assets/buhta2.jpg';
import image3 from './assets/buhta3.jpg';
import image4 from './assets/buhta4.jpg';



const RecreationCenters = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Пример данных о базах отдыха
    const centers = [
        { name: 'Кибер база', description: 'Бугагага', image: image1 },
        { name: 'Dubki Glamping', description: 'Бугагага', image: image2 },
        { name: 'Tiny House', description: 'Бугагага', image: image3 },
        { name: 'Алые паруса', description: 'Бугагага', image: image4 },
        
    ];

    return (
        <div className="recreation-centers">
            <h2 className="centers-title" data-aos="fade-up">Базы отдыха Владивостока</h2>

            <div className="centers-list">
                {centers.map((center, index) => (
                    <div className="center-card" key={index} data-aos="fade-up">
                        <img src={center.image} alt={center.name} className="center-image" />
                        <div className="center-details">
                            <h3>{center.name}</h3>
                            <p>{center.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecreationCenters;
