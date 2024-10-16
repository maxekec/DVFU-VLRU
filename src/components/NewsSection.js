import React from 'react';

const NewsSection = () => {
  return (
    <main>
      <section className="news">
        <div className="container">
          <h2>Новости Владивостока</h2>
          <div className="news-list">
            <article className="news-card">
              <img src="https://via.placeholder.com/400" alt="Новость" />
              <h3><a href="#">Теплосеть в Первомайском районе отремонтирована на 77%</a></h3>
              <p>Отличительный сезон во Владивостоке начнётся 18 октября...</p>
            </article>
            <article className="news-card">
              <img src="https://via.placeholder.com/400" alt="Новость" />
              <h3><a href="#">Дорогу к Тисленковой больнице засасфальтируют в ноябре</a></h3>
              <p>Планируются масштабные работы...</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsSection;
