import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Itinerary from './pages/Itinerary';
import { AppContextProvider } from './context/App.Context';


const App = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/itinerary' element={<Itinerary/>}/>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
