import React from 'react';

const NavPanel = () => {
  return (
    <div className="nav-container">
      <div className="nav-btn">
        <i className="fas fa-bars"></i>
      </div>
      <div className="nav-circle">
        <ul>
          <li><a href="#"><i className="fas fa-film"></i><span>Кино</span></a></li>
          <li><a href="#"><i className="fas fa-water"></i><span>Отключения воды</span></a></li>
          <li><a href="#"><i className="fas fa-home"></i><span>Недвижимость</span></a></li>
          <li><a href="#"><i className="fas fa-phone-alt"></i><span>Справочник</span></a></li>
          <li><a href="#"><i className="fas fa-hotel"></i><span>Базы отдыха</span></a></li>
          <li><a href="#"><i className="fas fa-car"></i><span>Транспорт</span></a></li>
          <li><a href="#"><i className="fas fa-tv"></i><span>ТВ-программа</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavPanel;
