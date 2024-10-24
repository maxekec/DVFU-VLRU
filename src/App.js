import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import './components/AOS.css';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NewsSection from './components/NewsSection';
import LoviKupon from './components/LoviKupon';
import CinemaSchedule from './components/CinemaSchedule';
import RecreationCenters from './components/RecreationCenters';
import ChatWidget from './components/ChatWidget';
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';
import VLRU from './components/VLRU';
import Afishi from './components/Afishi'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
     
      <Header />

     
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NewsSection />
              <CinemaSchedule />
              <RecreationCenters />
              <LoviKupon />
              <Questionnaire />
            </>
          }
        />
        <Route path="/cinema" element={<CinemaSchedule />} />
        <Route path="/recreation-centers" element={<RecreationCenters />} />
        <Route path="/lovi-kupon" element={<LoviKupon />} />
        <Route path="/afishi" element={<Afishi />} /> 
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/vlru" element={<VLRU />} />
      </Routes>

      
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;
