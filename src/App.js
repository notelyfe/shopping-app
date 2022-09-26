import './App.css';
import Nav from './Components/Nav'
import SearchFilter from './Components/SearchFilter'
import ProductListing from './Components/ProductListing'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav />
      <SearchFilter />
      <ProductListing />
    </>
  );
}

export default App;
