import React, { useEffect, useRef } from 'react';

const YandexMap = ({ resorts }) => {
  const mapRef = useRef(null); // Ссылка на объект карты
  const mapContainerRef = useRef(null); // Ссылка на контейнер карты

  useEffect(() => {
    const ymaps = window.ymaps;

    if (!ymaps) {
      console.error("Yandex Maps API is not loaded.");
      return;
    }

    ymaps.ready(() => {
      if (!mapRef.current) {
        // Инициализация карты
        mapRef.current = new ymaps.Map(mapContainerRef.current, {
          center: [43.123979, 131.912021], // Центр карты
          zoom: 10, // Масштаб
          controls: ['zoomControl', 'fullscreenControl'], // Контролы
        });

        // Обновляем маркеры при изменении курортов
        const updateMarkers = () => {
          const geoObjects = mapRef.current.geoObjects;
          geoObjects.removeAll(); // Удаляем предыдущие маркеры

          resorts.forEach(resort => {
            const placemark = new ymaps.Placemark(resort.coordinates, {
              balloonContent: `<strong>${resort.name}</strong><br/>${resort.description}`,
            }, {
              preset: 'islands#icon',
              iconColor: '#ff6700', // Цвет маркера
            });

            geoObjects.add(placemark); // Добавляем маркер
          });
        };

        updateMarkers(); // Вызываем функцию обновления маркеров
      }
    });
  }, [resorts]);

  return (
    <div className="map-container">
      <div
        ref={mapContainerRef} /* Ссылка на контейнер карты */
        id="map"
        className="map-box"
        style={{ width: '100%', height: '200px' }} // Задаем размеры карты напрямую
      />
    </div>
  );
};

export default YandexMap;
