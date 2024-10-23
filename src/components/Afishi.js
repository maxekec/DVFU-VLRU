import React, { useState, useEffect } from 'react';
import './Afishi.css'; // Импортируем CSS для стилей
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Импортируем стили Swiper
import { FaStar } from 'react-icons/fa'; // Импортируем звезды из библиотеки react-icons
import poster1 from './assets/kino1.jpg';
import poster2 from './assets/kino2.jpg';
import poster3 from './assets/kino3.jpg';
import poster4 from './assets/kino4.jpg';
import poster5 from './assets/kino5.png';
import poster6 from './assets/kino6.jpg';
import poster7 from './assets/kino7.jpg';
import poster8 from './assets/kino8.jpg';
import poster9 from './assets/kino9.jpg';
import poster10 from './assets/kino10.jpg';
// Список событий
const events = [
    {
        id: 1,
        title: "Концерт группы 'Рокеры'",
        date: "5 ноября 2024",
        time: "19:00",
        location: "ДК 'Молодежный'",
        image: poster1,
        description: "Не пропустите!",
        rating: 4.5,
    },
    {
        id: 2,
        title: "Спектакль 'Сон в летнюю ночь'",
        date: "7 ноября 2024",
        time: "18:00",
        location: "Театр имени Чехова",
        image: poster2,
        description: "Забронируйте билеты заранее.",
        rating: 4.7,
    },
    {
        id: 3,
        title: "Кинофестиваль",
        date: "9 ноября 2024",
        time: "10:00",
        location: "Кинотеатр 'Премьер'",
        image: poster3,
        description: "Лучшие фильмы года.",
        rating: 4.8,
    },
    {
        id: 4,
        title: "Выставка современного искусства",
        date: "11 ноября 2024",
        time: "12:00",
        location: "Галерея 'Арт'",
        image: poster4,
        description: "Не пропустите уникальные работы.",
        rating: 4.6,
    },
    {
        id: 5,
        title: "Фестиваль еды",
        date: "13 ноября 2024",
        time: "11:00",
        location: "Площадь Ленина",
        image: poster5,
        description: "Вкусная еда и веселье!",
        rating: 4.9,
    },
];
// Список новинок афиши
const newEvents = [
    {
        id: 6,
        title: "Мастер-класс по живописи",
        date: "10 ноября 2024",
        time: "14:00",
        location: "Арт-студия",
        image: poster7,
        rating: 4.7,
    },
    {
        id: 7,
        title: "Концерт классической музыки",
        date: "12 ноября 2024",
        time: "19:00",
        location: "Концертный зал",
        image: poster1,
        rating: 4.9,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster2,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster3,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster4,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster5,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster6,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster7,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster8,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster9,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster1,
        rating: 4.6,
    },
    {
        id: 8,
        title: "Фильм 'Вечный свет'",
        date: "15 ноября 2024",
        time: "20:00",
        location: "Кинотеатр 'Космос'",
        image: poster3,
        rating: 4.6,
    },
    // Добавьте другие события по необходимости
];
const Afishi = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [selectedEvent, setSelectedEvent] = useState(null); // Состояние для выбранного события
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <div className="stars">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} color="#ffc107" />
                ))}
                {halfStar && <FaStar key="half" color="#ffc107" style={{ opacity: 0.5 }} />}
            </div>
        );
    };
    return (
        <div className="afishi-container" data-aos="fade-up">
            <h1 className="afisha-title">Афиша событий города</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                className="events-slider"
            >
                {events.map(event => (
                    <SwiperSlide key={event.id}>
                        <div className="event-card">
                            <img src={event.image} alt={event.title} />
                            <h2>{event.title}</h2>
                            <p className="event-date">{event.date} в {event.time}</p>
                            <p className="event-location">{event.location}</p>
                            {renderStars(event.rating)}
                            <button className="btn" onClick={() => setSelectedEvent(event)}>Узнать больше</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Новый блок с новинками афиши */}
            <div className="new-events-container">
                <h2>Новинки Афиши во Владивостоке</h2>
                <div className="new-events-grid">
                    {newEvents.map(event => (
                        <div key={event.id} className="new-event-card">
                            <img src={event.image} alt={event.title} />
                            <h3>{event.title}</h3>
                            <p>{event.date} в {event.time}</p>
                            <p>{event.location}</p>
                            {renderStars(event.rating)}
                        </div>
                    ))}
                </div>
            </div>
            {selectedEvent && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>{selectedEvent.title}</h2>
                        <img src={selectedEvent.image} alt={selectedEvent.title} />
                        <p><strong>Где:</strong> {selectedEvent.location}</p>
                        <p><strong>Оценка:</strong> {renderStars(selectedEvent.rating)}</p>
                        <p><strong>Описание:</strong> {selectedEvent.description}</p>
                        <button className="close-modal" onClick={() => setSelectedEvent(null)}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Afishi;