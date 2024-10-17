import React from 'react';
import './App.css';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NewsSection from './components/NewsSection';
import Questionnaire from './components/Questionnaire';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NewsSection />
      <Questionnaire />
      <Footer />
      
    </div>
  );
}



export default App;
