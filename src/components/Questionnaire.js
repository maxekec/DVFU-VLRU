import React, { useEffect } from 'react';
import './Questionnaire.css';
import { useSpring, animated } from '@react-spring/web';
import AOS from 'aos';
import 'aos/dist/aos.css';

const questions = [
  {
    id: 1,
    title: 'Предлагайте',
    description: 'Принимайте участие в жизни города от идеи до реализации',
    stats: [
      { value: 62, label: 'проекта реализовано' },
      { value: 12500, label: 'идей подано' }
    ],
    buttonText: 'Принять участие',
  },
  {
    id: 2,
    title: 'Обсуждайте',
    description: 'Голосуйте, узнавайте о новом во Владивостоке',
    stats: [
      { value: 7082449, label: 'активных граждан' },
      { value: 6708, label: 'проведенных голосований' }
    ],
    buttonText: 'Принять участие',
  },
  {
    id: 3,
    title: 'Контролируйте',
    description: 'Сообщайте о проблемах в вашем доме, дворе или на улице',
    stats: [
      { value: 2302241, label: 'пользователей' },
      { value: 9667049, label: 'проблем уже решено' }
    ],
    buttonText: 'Сообщить о проблеме',
  },
];

const AnimatedNumber = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { tension: 75, friction: 20 },
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

const Questionnaire = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="questionnaire-container">
      {questions.map(({ id, title, description, stats, buttonText }) => (
        <div className="card" key={id} data-aos="zoom-in" data-aos-duration="750"> 
          <div className="background-image" />
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <ul className="card-stats">
              {stats.map(({ value, label }, index) => (
                <li key={index}>
                  <AnimatedNumber value={value} /> {label}
                </li>
              ))}
            </ul>
            <button>{buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questionnaire;
