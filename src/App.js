// src/App.js
import { HashRouter, Routes, Route } from 'react-router-dom';
import AnalyticsListener from './components/AnalyticsListener';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <HashRouter>          {/* Router provider */}
      <AnalyticsListener />  {/* ← fires page_view on every route change */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
