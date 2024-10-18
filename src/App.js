import React from 'react';
import './App.css';
import './components/AOS.css'; // добавьте это в App.js или index.js
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NewsSection from './components/NewsSection';
import ChatWidget from './components/ChatWidget';
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewsSection />
      <Questionnaire />
      <ChatWidget />
      <Footer />
      
    </div>
  );
}



export default App;
