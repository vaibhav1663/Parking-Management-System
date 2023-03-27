import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
