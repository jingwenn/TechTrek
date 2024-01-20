import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Itinerary from './pages/Itinerary';
import { AppContextProvider } from './context/App.Context';


const App = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/home' element={<ProtectedRoute/>}>
          <Route exact path='/home' element={<Home/>}/>
        </Route>
        <Route exact path ='/itinerary' element={<ProtectedRoute/>}/>
          <Route exact path='/itinerary' element={<Itinerary/>}>
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

export default App;
