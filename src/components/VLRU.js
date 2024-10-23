import React, { useState, useMemo } from 'react';
import Modal from 'react-modal';
import './VLRU.css';
import YandexMap from './YandexMap';
import image1 from '../components/assets/buhta1.jpg';
import image2 from '../components/assets/buhta2.jpg';
import image3 from '../components/assets/buhta3.jpg';
import image4 from '../components/assets/buhta4.jpg';

const resortsData = [
  {
    id: 1,
    name: 'База отдыха "Сосновый бор"',
    description: 'Уютная база с прекрасными условиями для отдыха на природе.',
    rating: 4,
    image: image1,
    coordinates: [55.751244, 37.618423],
    price: 'от 10 500 ₽ / сутки',
    houseTypes: ['6-местный дом "Альфа-Хаус" №1', '12-местный дом "Classic"'],
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
    image: image2,
    coordinates: [56.751244, 38.618423],
    price: 'от 17 500 ₽ / сутки',
    houseTypes: ['12-местный дом "Морской"', '6-местный дом "Альфа-Хаус" №2'],
    reviews: [
      { comment: 'Лучшее место для уединения!', author: 'Светлана' },
      { comment: 'Очень приятно провести время!', author: 'Алексей' },
    ],
  },
  {
    id: 3,
    name: 'База отдыха "Горный воздух"',
    description: 'Прекрасное место для активного отдыха и туризма.',
    rating: 4,
    image: image3,
    coordinates: [58.751244, 39.618423],
    price: 'от 15 000 ₽ / сутки',
    houseTypes: ['6-местный дом', '12-местный дом "Classic"'],
    reviews: [
      { comment: 'Очень понравилось, буду советовать друзьям!', author: 'Михаил' },
      { comment: 'Удобное расположение и много развлечений!', author: 'Мария' },
    ],
  },
  {
    id: 4,
    name: 'База отдыха "Тихий берег"',
    description: 'Отдых у озера с возможностью рыбалки и походов.',
    rating: 3,
    image: image4,
    coordinates: [59.751244, 40.618423],
    price: 'от 8 500 ₽ / сутки',
    houseTypes: ['6-местный дом "Морской"', '12-местный дом "Classic"'],
    reviews: [
      { comment: 'Отличное место для рыбалки.', author: 'Владимир' },
      { comment: 'Уютно, но мало активности.', author: 'Сергей' },
    ],
  },
];

const Vlru = () => {
  const [filter, setFilter] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedResort, setSelectedResort] = useState(null);

  const filteredResorts = useMemo(() => {
    return resortsData.filter((resort) =>
      resort.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const openModal = (resort) => {
    setSelectedResort(resort);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedResort(null);
  };

  Modal.setAppElement('#root');

  return (
    <div className="app">
      <div className="resort-filter">
        <h2>Фильтры</h2>
        <label>
          Поиск:
          <input
            type="text"
            placeholder="Введите название базы..."
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>

      <YandexMap resorts={filteredResorts} />

      <div className="resort-list">
        {filteredResorts.map((resort) => (
          <div key={resort.id} className="resort-card">
            <img src={resort.image} alt={resort.name} />
            <div className="resort-card-content">
              <div className="resort-header">
                <h3>{resort.name}</h3>
                <span className="price-tag">{resort.price}</span>
              </div>
              <p>{resort.description}</p>
              <div className="house-types">
                {resort.houseTypes.map((house, index) => (
                  <p key={index}>{house}</p>
                ))}
              </div>
              <div className="ratings">
                {Array.from({ length: resort.rating }, (_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <button className="details-button" onClick={() => openModal(resort)}>
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedResort && (
          <>
            <button className="close-button close-icon" onClick={closeModal} />
            <h2>{selectedResort.name}</h2>
            <img
              src={selectedResort.image}
              alt={selectedResort.name}
              className="modal-image"
            />
            <p>{selectedResort.description}</p>
            <h4>Рейтинг: {selectedResort.rating} ★</h4>
            <h4>Отзывы:</h4>
            <ul>
              {selectedResort.reviews.map((review, index) => (
                <li key={index}>
                  <p>
                    "{review.comment}" - <strong>{review.author}</strong>
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Vlru;
