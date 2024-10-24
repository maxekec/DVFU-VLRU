import React, { useState } from 'react';

const BaseCatalog = () => {
  const [selectedBase, setSelectedBase] = useState(null);

  const bases = [
    {
      id: 1,
      name: 'База отдыха "Лесная сказка"',
      description: 'Идеальное место для отдыха на природе.',
      reviews: ['Очень понравилось!', 'Красивое место, вернёмся ещё.'],
    },
    {
      id: 2,
      name: 'База отдыха "Уютное место"',
      description: 'Отдых для всей семьи с комфортом.',
      reviews: ['Уютно и спокойно.', 'Прекрасное обслуживание.'],
    },
    {
      id: 3,
      name: 'База отдыха "Солнечная поляна"',
      description: 'Романтика природы и уединения.',
      reviews: ['Удивительно тихо и красиво!', 'Невероятный вид.'],
    },
  ];

  const handleMoreInfoClick = (base) => {
    setSelectedBase(base);
  };

  const closeModal = () => {
    setSelectedBase(null);
  };

  return (
    <section className="base-catalog">
      <div className="container">
        <h2>Каталог баз отдыха</h2>
        <div className="base-list">
          {bases.map((base) => (
            <article className="base-card" key={base.id}>
              <h3><a href="#">{base.name}</a></h3>
              <p>{base.description}</p>
              <button onClick={() => handleMoreInfoClick(base)}>Подробнее</button>
            </article>
          ))}
        </div>

        {/* Модальное окно */}
        {selectedBase && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h3>{selectedBase.name}</h3>
              <p>{selectedBase.description}</p>
              <h4>Отзывы:</h4>
              <ul>
                {selectedBase.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
              <h4>Карта:</h4>
              <div id="map"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BaseCatalog;
