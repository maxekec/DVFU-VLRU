import React, { useEffect, useRef } from 'react';

const YandexMap = ({ resorts }) => {
  const mapRef = useRef(null); 
  const mapContainerRef = useRef(null); 

  useEffect(() => {
    const ymaps = window.ymaps;

    if (!ymaps) {
      console.error("Yandex Maps API is not loaded.");
      return;
    }

    ymaps.ready(() => {
      if (!mapRef.current) {
        
        mapRef.current = new ymaps.Map(mapContainerRef.current, {
          center: [43.123979, 131.912021], 
          zoom: 10, // Масштаб
          controls: ['zoomControl', 'fullscreenControl'], 
        });
      }
    });

 
 const updateMarkers = () => {
  const geoObjects = mapRef.current.geoObjects;
  geoObjects.removeAll(); 
  resorts.forEach(resort => {
    const placemark = new ymaps.Placemark(resort.coordinates, {
      balloonContent: `<strong>${resort.name}</strong><br/>${resort.description}`,
    }, {
      preset: 'islands#icon',
      iconColor: '#ff6700', 
    });
    geoObjects.add(placemark); 
  });
};
  }, [resorts]); 

  return (
    <div className="map-container">
      <div
        ref={mapContainerRef} 
        id="map"
        className="map-box"
        style={{ width: '100%', height: '200px' }} 
      />
    </div>
  );
};

export default YandexMap;
