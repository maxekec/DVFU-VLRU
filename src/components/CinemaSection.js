import React from 'react';

const CinemaSection = () => {
  return (
    <section className="cinema">
      <div className="container">
        <h2>Киноафиша Владивостока</h2>
        <div className="cinema-list">
          <article className="cinema-card">
            <img src="https://via.placeholder.com/400" alt="Фильм" />
            <h3><a href="#">Фильм 1: Название</a></h3>
            <p>Краткое описание фильма 1...</p>
          </article>
          <article className="cinema-card">
            <img src="https://via.placeholder.com/400" alt="Фильм" />
            <h3><a href="#">Фильм 2: Название</a></h3>
            <p>Краткое описание фильма 2...</p>
          </article>
          <article className="cinema-card">
            <img src="https://via.placeholder.com/400" alt="Фильм" />
            <h3><a href="#">Фильм 3: Название</a></h3>
            <p>Краткое описание фильма 3...</p>
          </article>
          {/* Добавьте дополнительные карточки по необходимости */}
        </div>
      </div>
    </section>
  );
};

export default CinemaSection;
