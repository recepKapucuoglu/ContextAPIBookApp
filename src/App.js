import { Route, Routes } from 'react-router';
import './App.css';
import KitapListesi from './components/KitapListesi';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import KitapDetay from './components/KitapDetay';
import Favoriler from './components/Favoriler';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<KitapListesi />} />
        <Route path="/books/:id" element={<KitapDetay />} />
        <Route path="/favoriler" element={<Favoriler />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
