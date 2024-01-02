import './App.css';
import './index.css'
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CurrencyInput from './screens/CurrencyInput.js';
import CurrencyOutput from './screens/CurrencyOutput.js'
function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
      <Routes>
        <Route path='/' element={<CurrencyInput/>}/>
        <Route path='/output/:fromCurrency/:toCurrency/:amount' element={<CurrencyOutput/>}/>
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
