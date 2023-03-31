import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Sidebar from './components/SideBar/Sidebar';
import { useState } from 'react';

function App() {

  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (author) =>{
  //   const newCart = [...cart, author];
  //   setCart(newCart);
  // }

  return (
    <div className="App container">
      <div className="m-auto mb-3">
        <Header></Header>
      </div>
      <hr></hr>
        <Home></Home>
    </div>
  )
}

export default App
