import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/greeting/greeting.component';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  );
}
