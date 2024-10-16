import React from 'react';
import './App.css';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavPanel from './components/NavPanel';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavPanel />
      <NewsSection />
      <Footer />
    </div>
  );
}



export default App;
