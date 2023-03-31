import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Sidebar from './components/SideBar/Sidebar';

function App() {

  return (
    <div className="App container">
      <div className="m-auto mb-3">
        <Header></Header>
      </div>
      <hr></hr>
      <div className='main row'>
        <div className="home-container col-md-8">
            <Home></Home>
        </div>
        <div className="text-center col-md-4">
            <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  )
}

export default App
