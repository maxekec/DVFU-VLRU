import React from 'react';

const BaseCatalog = () => {
  return (
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
  );
};

export default BaseCatalog;
