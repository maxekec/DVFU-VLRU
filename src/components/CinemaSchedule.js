import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css'; // Импорт стилей AOS
import AOS from 'aos'; // Импорт библиотеки AOS
import './CinemaSchedule.css'; // Импорт CSS для компонента
import poster1 from './assets/kino1.jpg';
import poster2 from './assets/kino2.jpg';
import poster3 from './assets/kino3.jpg';
import poster4 from './assets/kino4.jpg';
import poster5 from './assets/kino5.png';
import poster6 from './assets/kino6.jpg';
import poster7 from './assets/kino7.jpg';
import poster8 from './assets/kino8.jpg';
import poster9 from './assets/kino9.jpg';


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

    const [filter, setFilter] = useState('all'); // Состояние для фильтрации
    const swiperRef = useRef(null); // Используем useRef для получения доступа к Swiper

    // Пример данных о фильмах
    const movies = [
        { title: 'Бегущий по лезвию', time: '6:00', poster: poster1, category: 'popular' },
        { title: 'Пацаны', time: '8:00', poster: poster7, category: 'popular' },
        { title: 'Аквамен', time: '10:00', poster: poster8, category: 'popular' },
        { title: 'Во все тяжкие', time: '12:00', poster: poster9, category: 'concert' },
        { title: 'Однажды в Голливуде', time: '14:30', poster: poster2, category: 'concert' },
        { title: 'Начало', time: '17:00', poster: poster3, category: 'concert' },
        { title: 'Джокер', time: '19:30', poster: poster4, category: 'theater' },
        { title: 'Дуэнья', time: '21:00', poster: poster5, category: 'theater' },
        { title: 'Интерстеллар', time: '23:30', poster: poster6, category: 'popular' },
    ];

    // Функция для фильтрации фильмов
    const filteredMovies = filter === 'all' ? movies : movies.filter(movie => movie.category === filter);

    // Обновление Swiper при изменении фильтра
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update(); // Обновляем Swiper при изменении фильтра
        }
    }, [filter]);

    return (
        <div className="cinema-schedule">
            <h2 className="schedule-title" data-aos="fade-up">Киноафиша Владивостока</h2>
            
            {/* Кнопки фильтрации */}
            <div className="filter-buttons" data-aos="fade-up">
                <button onClick={() => setFilter('all')}>Все</button>
                <button onClick={() => setFilter('popular')}>Популярные</button>
                <button onClick={() => setFilter('concert')}>Концерты</button>
                <button onClick={() => setFilter('theater')}>Театры</button>
            </div>

            {/* Swiper компонент для карусели фильмов */}
            <Swiper
                ref={swiperRef} // Используем реф для доступа к инстансу Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5} // Уменьшаем пространство между карточками
                slidesPerView={6} // Количество отображаемых слайдов
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="movie-swiper"
                data-aos="fade-up"
            >
                {filteredMovies.length > 0 ? ( // Проверка на наличие фильмов
                    filteredMovies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className="movie-card">
                                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                                <div className="movie-details">
                                    <h3>{movie.title}</h3>
                                    <p>Сеанс: {movie.time}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="no-movies">Нет доступных фильмов по выбранному фильтру.</div> // Сообщение о том, что фильмы не найдены
                )}
            </Swiper>
        </div>
    );
};

export default CinemaSchedule;
