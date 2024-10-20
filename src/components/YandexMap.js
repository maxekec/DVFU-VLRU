import React, { useEffect, useRef } from 'react';

const YandexMap = ({ resorts }) => {
  const mapRef = useRef(null); // Ссылка на карту

  useEffect(() => {
    const ymaps = window.ymaps;

    // Инициализация карты только в первый раз
    if (!mapRef.current) {
      ymaps.ready(() => {
        mapRef.current = new ymaps.Map("map", {
          center: [55.751244, 37.618423], // Центр карты (Москва)
          zoom: 10, // Масштаб
        });
      });
    }

    // Обновление маркеров при изменении списка курортов
    const updateMarkers = () => {
      if (mapRef.current) {
        const geoObjects = mapRef.current.geoObjects;
        if (geoObjects) {
          geoObjects.removeAll(); // Удаление предыдущих маркеров
        }

        resorts.forEach(resort => {
          const placemark = new ymaps.Placemark(resort.coordinates, {
            balloonContent: `<strong>${resort.name}</strong><br/>${resort.description}`,
          }, {
            preset: 'islands#icon',
            iconColor: '#ff6700', // Цвет маркеров
          });

          geoObjects.add(placemark);
        });
      }
    };

    updateMarkers(); // Обновляем маркеры

    console.log("YandexMap component rendered");

  }, [resorts]); // Эффект будет вызываться при изменении массива курортов

  return (
    <div className="map-container">
      <div id="map" style={{ width: '100%', height: '300px' }} /> {/* Уменьшенная высота карты */}
    </div>
  );
};

export default YandexMap;
