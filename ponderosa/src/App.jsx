import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Accommodations from './pages/Accommodations.jsx';
import Activities from './pages/Activities.jsx';
import Location from './pages/Location.jsx';
import Packages from './pages/Packages.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Nav />
      <main style={{ flex: 1, marginTop: 64 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
