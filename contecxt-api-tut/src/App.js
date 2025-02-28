import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import Cart from './component/Cart';
import Home from './component/Home';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
