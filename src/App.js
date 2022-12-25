import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'   // we have to import prover from react redux binding to use it
import store from './store/store';
import Cart from './pgaes/Cart';
import Home from './pgaes/Home'; 
import Navbar from './componenets/Navbar';



function App() {
  return (
    <div className="App">  
    {/*  wrap all content inside a provider so we can use redux store in any component of app ,  provide a store to provider */}
      <Provider store = {store}>     
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route> 
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
