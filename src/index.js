import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Accueil';
import UpdateEnchere from './Pages/UpdateEnchere';
import Historique from './Pages/Historique';
import HistoriqueDetails from './Pages/HistoriqueDetails';
import State from './Pages/State';
import Recharge from './Pages/Recharge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/Accueil" element={<Accueil/>} />
      <Route exact path="/UpdateEnchere" element={<UpdateEnchere/>} />
      <Route exact path="/Historique" element={<Historique/>} />
      <Route exact path="/HistoriqueDetails" element={<HistoriqueDetails/>} />
      <Route exact path="/State" element={<State/>} />
      <Route exact path="/Recharge" element={<Recharge/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
