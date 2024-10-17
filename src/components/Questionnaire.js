import React from 'react';
import './Questionnaire.css';

const questions = [
  {
    id: 1,
    title: 'Предлагайте',
    description: 'Принимайте участие в жизни города от идеи до реализации',
    stats: ['62 проекта реализовано', '125 000 идей подано'],
    buttonText: 'Принять участие',
  },
  {
    id: 2,
    title: 'Обсуждайте',
    description: 'Голосуйте, узнавайте о новом в Москве',
    stats: ['7 082 449 активных граждан', '6 708 проведенных голосований'],
    buttonText: 'Принять участие',
  },
  {
    id: 3,
    title: 'Контролируйте',
    description: 'Сообщайте о проблемах в вашем доме, дворе или на улице',
    stats: ['2 302 241 пользователей', '9 667 049 проблем уже решено'],
    buttonText: 'Сообщить о проблеме',
  },
];

const Questionnaire = () => (
  <div className="questionnaire-container">
    {questions.map(({ id, title, description, stats, buttonText }) => (
      <div className="card" key={id}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>{stat}</li>
            ))}
          </ul>
          <button>{buttonText}</button>
        </div>
      </div>
    ))}
  </div>
);

export default Questionnaire;
