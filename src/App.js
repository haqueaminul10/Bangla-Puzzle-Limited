import logo from './logo.svg';
import './App.css';

//IMPORT REACT-ROUTER-DOM
import {  Routes, Route } from "react-router-dom";

//IMPORT COMPONENTS
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
