import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/login/login';
import Signup from "./components/signup/signup";
import Product from './components/product/product';
import Cart from './components/cart/cart';
import History from './components/history/history';
import { Isuserloggedin,Protected } from './components/utilities';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Isuserloggedin><Login/></Isuserloggedin> }></Route>
          <Route path="/signup" element={<Isuserloggedin> <Signup/></Isuserloggedin>}></Route>
          <Route path='/products' element={<Protected><Product/></Protected> } ></Route>
          <Route path='/cart' element={<Protected><Cart/></Protected> } ></Route>
          <Route path='/history' element={<Protected><History/></Protected> } ></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
