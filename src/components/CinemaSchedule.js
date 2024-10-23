import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './CinemaSchedule.css';
import poster1 from './assets/kino1.jpg';
import poster2 from './assets/kino2.jpg';
import poster3 from './assets/kino3.jpg';
import poster4 from './assets/kino4.jpg';
import poster5 from './assets/kino5.png';
import poster6 from './assets/kino6.jpg';
import poster7 from './assets/kino7.jpg';
import poster8 from './assets/kino8.jpg';
import poster9 from './assets/kino9.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import MovieModal from './MovieModal'; // Import the MovieModal component

const CinemaSchedule = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [filter, setFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const swiperRef = useRef(null);

    const movies = [
        {
            
            rating: '8.0',
            poster: poster1,
            description: 'На Земле наступает конец цивилизации. Однажды детективу Рику Декарду поручают сложную задачу — найти и устранить беглых репликантов, которые бунтуют против человечества. Этот визуально потрясающий фильм задает вопросы о том, что значит быть человеком в мире, где технологии преобладают над природой.',
            director: 'Ридли Скотт',
            cast: ['Райан Гослинг', 'Харрисон Форд', 'Робин Райт'],
            duration: 164,
            category: 'science fiction'
        },
        {
            
            rating: '7.5',
            poster: poster7,
            description: 'В этой шокирующей и ироничной интерпретации супергеройского жанра группа обычных людей решает противостоять злым супергероям. Наполненный черным юмором и жестокими сценами, сериал бросает вызов традиционным представлениям о героизме и справедливости.',
            director: 'Эрик Крипке',
            cast: ['Карл Урбан', 'Джаквин Хенсон', 'Энтони Старр'],
            duration: 60, // минут (каждая серия)
            category: 'action'
        },
        {
            
            rating: '6.9',
            poster: poster8,
            description: 'Этот зрелищный супергеройский фильм погружает зрителей в удивительный подводный мир. Аквамен, полукровка, должен объединить свои силы и вернуть трон, который ему принадлежит, одновременно сражаясь с внутренними демонами и внешними угрозами.',
            director: 'Джеймс Ван',
            cast: ['Джейсон Момоа', 'Эмбер Херд', 'Уиллем Дефо'],
            duration: 143,
            category: 'action'
        },
        {
            
            rating: '9.5',
            poster: poster9,
            description: 'Это захватывающая история о превращении учителя химии в наркобарона. Когда жизнь Уолтера Уайта меняется из-за страшного диагноза, он решает использовать свои знания, чтобы обеспечить семью, что приводит к множеству этических дилемм и драматическим последствиям.',
            director: 'Винс Гиллиган',
            cast: ['Брайан Кранстон', 'Аарон Пол', 'Анна Ганн'],
            duration: 47, // минут (каждая серия)
            category: 'drama'
        },
        {
            
            rating: '8.2',
            poster: poster2,
            description: 'Фильм о киноиндустрии в конце 60-х годов, рассказывающий о жизни актера и его дублера. Этот фильм полон ностальгии, а его детали погружают зрителей в атмосферу старого Голливуда, исследуя сложные отношения и динамику времени.',
            director: 'Квентин Тарантино',
            cast: ['Леонардо ДиКаприо', 'Брэд Питт', 'Марго Робби'],
            duration: 161,
            category: 'drama'
        },
        {
            
            rating: '8.8',
            poster: poster3,
            description: 'Этот сложный научно-фантастический триллер исследует мир снов и кражи идей. Главный герой, опытный вор, получает возможность стереть свои преступления, если ему удастся внедриться в сознание целевой личности. Фильм заставляет задуматься о реальности и подсознании.',
            director: 'Кристофер Нолан',
            cast: ['Леонардо ДиКаприо', 'Джозеф Гордон-Левитт', 'Эллен Пейдж'],
            duration: 148,
            category: 'FreeKarta'
        },
        {
            
            rating: '8.4',
            poster: poster4,
            description: 'Этот мрачный и глубокий фильм рассказывает историю о происхождении злодея из комиксов. Джокер — это не просто злодей, это портрет человека, который стал жертвой общества. Фильм затрагивает важные темы психического здоровья и социальной изоляции.',
            director: 'Тодд Филд',
            cast: ['Хоакин Феникс', 'Роберт Де Ниро', 'Зази Битц'],
            duration: 122,
            category: 'drama'
        },
        {
            
            rating: '7.1',
            poster: poster5,
            description: 'Эта комедия о сложных взаимоотношениях в театре раскрывает, как личные проблемы актеров и создателей влияют на их профессиональную жизнь. Полная юмора и иронии, "Дуэнья" показывает, как театральный мир способен быть как волшебным, так и разрушительным.',
            director: 'Мартин Кулхави',
            cast: ['Эмма Стоун', 'Хью Лори', 'Дэнни ДеВито'],
            duration: 90,
            category: 'comedy'
        },
        {
            
            rating: '8.6',
            poster: poster6,
            description: 'Эпическая космическая одиссея, в которой группа астронавтов отправляется через червоточину в поисках нового дома для человечества. Этот фильм не только исследует границы науки и технологий, но и поднимает важные вопросы о любви, времени и самопожертвовании.',
            director: 'Кристофер Нолан',
            cast: ['Мэттью МакКонахи', 'Энн Хэтэуэй', 'Джессика Честейн'],
            duration: 169,
            category: 'science fiction'
        }
    ];
    
    const filteredMovies = filter === 'all' ? movies : movies.filter(movie => movie.category === filter);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, [filter]);

    const handleTicketClick = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="cinema-schedule">
            <h2 className="schedule-title" data-aos="fade-up">Киноафиша Владивостока</h2>

            <div className="filter-buttons" data-aos="fade-up">
                <button onClick={() => setFilter('all')}>Все</button>
                <button onClick={() => setFilter('science fiction')}>Научная фантастика</button>
                <button onClick={() => setFilter('action')}>Экшен</button>
                <button onClick={() => setFilter('drama')}>Драма</button>
                <button onClick={() => setFilter('comedy')}>Комедия</button>
                <button onClick={() => setFilter('FreeKarta')}>Пушкинская карта</button>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={5}
                className="movie-swiper"
                data-aos="fade-up"
            >
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className="movie-card">
                                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                                <button className="ticket-button" onClick={() => handleTicketClick(movie)}>Билеты</button>
                                <svg className="heart-icon" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <div className="movie-details">
                                <h3>{movie.title}</h3>
                                
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="no-movies">Нет доступных фильмов по выбранному фильтру.</div>
                )}
            </Swiper>

            {/* Movie Modal */}
            {isModalOpen && selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={closeModal} />
            )}
            <a href="/VLRU" className="view-all-link" data-aos="fade-up">
                Все события
            </a>
        </div>
    );
};

export default CinemaSchedule;