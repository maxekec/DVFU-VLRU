import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Импорт стилей AOS
import AOS from 'aos'; // Импорт библиотеки AOS
import './CinemaSchedule.css'; // Импорт CSS для компонента
import poster1 from './assets/kino1.jpg';
import poster2 from './assets/kino2.jpg';
import poster3 from './assets/kino3.jpg';
import poster4 from './assets/kino4.jpg';
import poster5 from './assets/kino5.png';
import poster6 from './assets/kino6.jpg';

// Импорт Swiper и нужных модулей
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Импорт основных стилей Swiper
import 'swiper/css/navigation'; // Импорт стилей навигации
import 'swiper/css/pagination'; // Импорт стилей пагинации
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Импорт модулей Swiper

const CinemaSchedule = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Пример данных о фильмах
    const movies = [
        { title: 'Бегущий по лезвию', time: '12:00', poster: poster1 },
        { title: 'Однажды в Голливуде', time: '14:30', poster: poster2 },
        { title: 'Начало', time: '17:00', poster: poster3 },
        { title: 'Джокер', time: '19:30', poster: poster4 },
        { title: 'Дуэнья', time: '21:00', poster: poster5 },
        { title: 'Интерстеллар', time: '23:30', poster: poster6 },

    ];

    return (
        <div className="cinema-schedule">
            <h2 className="schedule-title" data-aos="fade-up">Киноафиша Владивостока</h2>

            {/* Swiper компонент для карусели фильмов */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5} // Уменьшаем пространство между карточками
                slidesPerView={5} // Количество отображаемых слайдов
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="movie-swiper"
                data-aos="fade-up"
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={index}>
                        <div className="movie-card">
                            <img src={movie.poster} alt={movie.title} className="movie-poster" />
                            <div className="movie-details">
                                <h3>{movie.title}</h3>
                                <p>Сеанс: {movie.time}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CinemaSchedule;
