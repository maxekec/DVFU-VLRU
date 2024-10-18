import React, { useState, useEffect } from 'react';
import './ChatWidget.css'; // Подключаем стили для компонента

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Для контроля видимости виджета

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Обработчик для прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Появление виджета, когда прокручено 50% страницы
      const shouldBeVisible = scrollPosition > windowHeight / 2;
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);

    // Очистка события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`chat-widget ${isVisible ? 'fade-in' : 'fade-out'} ${isOpen ? 'open' : ''}`}>
        <button className="chat-toggle" onClick={toggleChat}>
          💬
        </button>
        {isOpen && (
          <div className="chat-box">
            <div className="chat-header">
              <h3>Связаться с нами</h3>
              <button className="chat-close" onClick={toggleChat}>
                ✖
              </button>
            </div>
            <div className="chat-body">
              <p>Как мы можем помочь?</p>
              <textarea placeholder="Введите ваше сообщение..."></textarea>
              <button className="chat-send">Отправить</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
