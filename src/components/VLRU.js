import React, { useState, useMemo } from 'react';
import './VLRU.css';
import YandexMap from './YandexMap';

const resortsData = [
  {
    id: 1,
    name: 'База отдыха "Сосновый бор"',
    description: 'Уютная база с прекрасными условиями для отдыха на природе.',
    rating: 4,
    image: 'https://via.placeholder.com/300',
    coordinates: [55.751244, 37.618423],
    reviews: [
      { comment: 'Отличное место для семейного отдыха!', author: 'Анна' },
      { comment: 'Всё очень понравилось!', author: 'Игорь' },
    ],
  },
  {
    id: 2,
    name: 'База отдыха "Лесная сказка"',
    description: 'Отдых на природе с комфортом и отличным обслуживанием.',
    rating: 5,
    image: 'https://via.placeholder.com/300',
    coordinates: [56.751244, 38.618423],
    reviews: [
      { comment: 'Лучшее место для уединения!', author: 'Светлана' },
      { comment: 'Очень приятно провести время!', author: 'Алексей' },
    ],
  },
  // Add more resorts here...
];

const Vlru = () => {
  const [filter, setFilter] = useState('');

  const filteredResorts = useMemo(() => {
    return resortsData.filter(resort =>
      resort.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div className="app">
      <h1>Базы отдыха</h1>
      <div className="resort-filter">
        <h2>Фильтры</h2>
        <label>
          Поиск:
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>

      {/* Yandex Map */}
      <YandexMap resorts={filteredResorts} />

      <div className="resort-list">
        {filteredResorts.map(resort => (
          <div key={resort.id} className="resort-card">
            <img src={resort.image} alt={resort.name} />
            <div className="resort-card-content">
              <h3>{resort.name}</h3>
              <p>{resort.description}</p>
              <div className="ratings">
                {Array.from({ length: resort.rating }, (_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <div className="reviews">
                {resort.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <p>{review.comment}</p>
                    <small>- {review.author}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vlru;
