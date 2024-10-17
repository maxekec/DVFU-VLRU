import React from 'react';

const NewsSection = () => {
  return (
    <main>
      <section className="news">
        <div className="container">
          <h2>Новости Владивостока</h2>
          <div className="news-list">
            <article className="news-card">
              <h3><a href="#">Теплосеть в Первомайском районе отремонтирована на 77%</a></h3>
              <p>Отличительный сезон во Владивостоке начнётся 18 октября...</p>
            </article>
            <article className="news-card">
              <h3><a href="#">Дорогу к Тисленковой больнице засасфальтируют в ноябре</a></h3>
              <p>Планируются масштабные работы...</p>
            </article>
            <article className="news-card">
              <h3><a href="#">Testing</a></h3>
              <p>Делаем сайтик</p>
            </article>
            <article className="news-card">
              <h3><a href="#">Testing</a></h3>
              <p>Делаем сайтик</p>
            </article>
          </div>
        </div>
      </section>

      {/* Новый контейнер для каталога баз отдыха */}
      <section className="base-catalog">
        <div className="container">
          <h2>Каталог баз отдыха</h2>
          <div className="base-list">
            <article className="base-card">
              <h3><a href="#">База отдыха "Лесная сказка"</a></h3>
              <p>Идеальное место для отдыха на природе.</p>
            </article>
            <article className="base-card">
              <h3><a href="#">База отдыха "Уютное место"</a></h3>
              <p>Отдых для всей семьи с комфортом.</p>
            </article>
            <article className="base-card">
              <h3><a href="#">База отдыха "Солнечная поляна"</a></h3>
              <p>Романтика природы и уединения.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsSection;
