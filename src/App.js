import './App.css';
import Nav from './Components/Nav'
import SearchFilter from './Components/SearchFilter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './Components/Checkout';
import State from './Components/Context/State'
import Alert from './Components/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThankYou from './Components/ThankYou';

function App() {

  return (
    <>
      <State>
        <Router>
          <Nav />
          <Alert />
          <Routes>
            <Route path="/" element={<SearchFilter />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmationPage" element={<ThankYou />} />
          </Routes>
        </Router>
      </State>
    </>
  );
}

export default App;
