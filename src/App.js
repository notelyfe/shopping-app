import './App.css';
import Nav from './Components/Nav'
import SearchFilter from './Components/SearchFilter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<SearchFilter />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
