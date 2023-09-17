import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Validation from './pages/Validation';
import Loan from './pages/Loan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mfportfolio" element={<Home />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/loan" element={<Loan />} />
      </Routes>
    </Router>
  );
}

export default App;
